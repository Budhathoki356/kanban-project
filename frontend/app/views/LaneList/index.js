import { CompositeView } from "backbone.marionette";
import LaneModel from "../../models/Lane";
import LaneView from "../Lane/index";
import template from "./template.pug";

export default CompositeView.extend({
  className: "container overflow-auto",

  childViewContainer: ".lane",

  ui: {
    modal: ".modal",
    laneTitleInput: ".k-lane-title",
    laneIdInput: ".k-lane-id",
    modalCloseBtn: ".k-lane-modal-close-btn",
    editLaneBtn: ".k-lane-edit-btn",
  },

  events: {
    "click @ui.modalCloseBtn": "closeModal",
    "click @ui.editLaneBtn": "updateSingleLane",
  },

  childView: LaneView,

  template,

  childViewEvents: {
    "toggle:modal": "toggleModal",
    "edit:lane": "editLane",
  },

  modelEvents: {
    "change": "render"
  },

  editLane(lane) {
    this.ui.laneTitleInput.val(lane.model.get("title"));
    this.ui.laneIdInput.val(lane.model.get("id"));
  },

  updateSingleLane() {
    const laneModel = new LaneModel();
    laneModel.updateLane({
      id: this.ui.laneIdInput.val(),
      title: this.ui.laneTitleInput.val(),
    });
    this.ui.modal.removeClass("k-lane-modal");
  },

  toggleModal() {
    this.ui.modal.toggleClass("k-lane-modal");
  },

  closeModal() {
    this.ui.modal.removeClass("k-lane-modal");
  },
});
