import { CompositeView } from "backbone.marionette";
import CardModel from "../../models/Card";
import Card from "../Card";
import template from "./template.pug";

export default CompositeView.extend({
  template,

  childViewContainer: ".k-card",

  childView: Card,

  ui: {
    titleInput: ".k-card-title",
    cardIdInput: ".k-card-id",
    laneIdInput: ".k-card-laneId",
    descriptionInput: ".k-card-description",
    cardCloseModalBtn: ".k-card-modal-close-btn",
    cardEditModalBtn: ".k-card-edit-btn",
    modal: ".modal",
    cardErrorMsg: ".card-error-msg",
  },

  events: {
    "click @ui.cardCloseModalBtn": "closeCardModal",
    "click @ui.cardEditModalBtn": "updateSingleCard",
  },

  childViewEvents: {
    "toggle:cardModal": "toggleCardModal",
    "edit:card": "editCard",
  },

  collectionEvents: {
    destroy: "render",
  },

  editCard(card) {
    this.ui.titleInput.val(card.model.get("title"));
    this.ui.cardIdInput.val(card.model.get("id"));
    this.ui.laneIdInput.val(card.model.get("laneId"));
    this.ui.descriptionInput.val(card.model.get("description"));
  },

  updateSingleCard(e) {
    const cardModel = new CardModel({
      id: Number(this.ui.cardIdInput.val()),
      laneId: Number(this.ui.laneIdInput.val()),
      title: this.ui.titleInput.val(),
      description: this.ui.descriptionInput.val(),
    });

    if (cardModel.isValid()) {
      // First, Update the Model and then update on server
      cardModel.updateCard({
        id: Number(this.ui.cardIdInput.val()),
        laneId: Number(this.ui.laneIdInput.val()),
        title: this.ui.titleInput.val(),
        description: this.ui.descriptionInput.val(),
      });

      // Second, Update the collection
      this.collection.set(cardModel, { remove: false });

      this.ui.modal.removeClass("k-card-modal");
    } else {
      e.preventDefault();
      this.ui.cardErrorMsg.text(cardModel.validationError);
    }
  },

  toggleCardModal() {
    this.ui.modal.toggleClass("k-card-modal");
  },

  closeCardModal() {
    this.ui.modal.removeClass("k-card-modal");
  },
});
