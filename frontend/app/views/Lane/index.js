import { CompositeView } from "backbone.marionette";
import LaneModel from "../../models/Lane";
import template from "./template.pug";

export default CompositeView.extend({
  className: "col-3",

  template,

  templateContext() {
    return {
      id: this.model.get("id"),
      title: this.model.get("title"),
    };
  },

  ui: {
    laneDeleteBtn: ".lane-delete-btn",
    laneEditBtn: ".lane-edit-btn",
  },

  events: {
    "click @ui.laneEditBtn": "openModal",
    "click @ui.laneDeleteBtn": "deleteLane",
  },

  collectionEvents: {
    destroy: "render",
  },

  // Third, Update the view on change in attribute 
  modelEvents: {
    "change:title": "render"
  },

  openModal() {
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
