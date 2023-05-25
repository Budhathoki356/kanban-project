import { View } from "backbone.marionette";
import CardModel from "../../models/Card";
import template from "./template.pug";

export default View.extend({
  className: "card-body bg-white mx-3 mt-3 mb-2 rounded k-card-body",

  template,

  ui: {
    cardDeleteBtn: '.card-delete-btn',
    editCardBtn: '.card-edit-btn'
  },

  events: {
    'click @ui.cardDeleteBtn': "deleteCard",
    "click @ui.editCardBtn": "openCardModal",
  },

  templateContext() {
    return {
      id: this.model.get("id"),
      title: this.model.get("title"),
      description: this.model.get("description"),
      laneId: this.model.get("laneId")
    };
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
