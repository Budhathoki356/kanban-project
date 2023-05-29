import { $ } from "backbone";
import { View } from "backbone.marionette";
import CardModel from "../../models/Card";
import template from "./template.pug";

export default View.extend({
  className: "card-body bg-white mx-3 mt-3 mb-2 rounded",

  template,

  ui: {
    cardDeleteBtn: '.card-delete-btn',
    editCardBtn: '.card-edit-btn',
    cardBtns: '.card-btns',
    cardBody: '.k-card-body'
  },

  events: {
    'click @ui.cardDeleteBtn': "deleteCard",
    "click @ui.editCardBtn": "openCardModal",
    "mouseenter @ui.cardBody": "displayCard",
    "mouseleave @ui.cardBody": "hideCard",
  },

  templateContext() {
    return {
      id: this.model.get("id"),
      title: this.model.get("title"),
      description: this.model.get("description"),
      laneId: this.model.get("laneId")
    };
  },

  displayCard(e) {
    $(e.currentTarget).find(".card-btns").removeClass("k-card_hide");
  },

  hideCard(e) {
    $(e.currentTarget).find(".card-btns").addClass("k-card_hide");
  },

  modelEvents: {
    "change": "render",
  },

  openCardModal() {
    this.trigger("toggle:cardModal");
    this.trigger("edit:card", this);
  },

  deleteCard() {
    const cardModel = new CardModel();

    confirm("Are you sure want to delete?");

    cardModel.deleteCard(this.model.get("id"));

    this.model.destroy();
  },
});
