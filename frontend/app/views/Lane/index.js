import { View } from "backbone.marionette";
import { cardsCollection, CardsCollection } from "../../collections/Card";
import CardModel from "../../models/Card";
import LaneModel from "../../models/Lane";
import CardListView from "../CardList/index";
import template from "./template.pug";

export default View.extend({
  className: "col-3",

  regions: {
    kLaneList: "#k-card-list",
  },

  async onRender() {
    const laneId = this.model.get("id");
    const res = await cardsCollection.fetch(laneId);
    const cards = new CardsCollection(res);

    this.showChildView("kLaneList", new CardListView({ collection: cards }));
  },

  template,

  templateContext() {
    return {
      id: this.model.get("id"),
      title: this.model.get("title"),
    };
  },

  ui: {
    modal: ".modal",
    laneDeleteBtn: ".lane-delete-btn",
    laneEditBtn: ".lane-edit-btn",
    addCardBtn: ".k-add-card-btn",
    closeCardBtn: ".k-card-modal-close-btn",
    cardTitleInput: ".k-card-title",
    cardDescriptionInput: ".k-card-description",
    laneId: ".k-card-laneId",
    cardSaveBtn: ".k-card-save-btn",
    cardErrorMsg: ".card-error-msg",
  },

  events: {
    "click @ui.laneEditBtn": "openLaneModal",
    "click @ui.laneDeleteBtn": "deleteLane",
    "click @ui.addCardBtn": "openCardModal",
    "click @ui.closeCardBtn": "closeCardModal",
    "click @ui.cardSaveBtn": "addCard",
  },

  collectionEvents: {
    destroy: "render",
  },

  // Third, Update the view on change in attribute
  modelEvents: {
    "change:title": "render",
  },

  openCardModal() {
    this.ui.modal.toggleClass("k-card-modal");
  },

  closeCardModal() {
    this.ui.modal.removeClass("k-card-modal");
  },

  async addCard(e) {
    var cardModel = new CardModel({
      title: this.ui.cardTitleInput.val(),
      description: this.ui.cardDescriptionInput.val(),
    });

    if (cardModel.isValid()) {
      // 1. Hit the api
      const res = await cardsCollection.createCard({
        title: this.ui.cardTitleInput.val(),
        description: this.ui.cardDescriptionInput.val(),
        laneId: Number(this.ui.laneId.val()),
      });

      // 2. Push it on collection of same instance
      cardsCollection.push(new CardModel({ ...res }));

      this.ui.modal.removeClass("k-card-modal");
      this.ui.cardTitleInput.val("");
      this.ui.cardDescriptionInput.val("");

      // 3. Render the component
      this.render();
    } else {
      e.preventDefault();
      this.ui.cardErrorMsg.text(cardModel.validationError);
    }
  },

  openLaneModal() {
    this.trigger("toggle:modal");
    this.trigger("edit:lane", this);
  },

  deleteLane() {
    const laneModel = new LaneModel();

    confirm("Are you sure want to delete?");

    laneModel.deleteLane(this.model.get("id"));

    this.model.destroy();
  },
});
