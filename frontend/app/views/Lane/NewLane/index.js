import template from "./template.pug";
import { View } from "backbone.marionette";
import { history } from "backbone";
import LaneModel from "../../../models/Lane";

export default View.extend({
  className: "row mt-4",

  template,

  ui: {
    laneSaveBtn: ".btn-lane-save",
    laneTitleInput: ".lane-title",
  },

  events: {
    "click @ui.laneSaveBtn": "saveLane",
  },

  saveLane() {
    this.model.set({title: this.ui.laneTitleInput.val()})
    history.navigate("", { trigger: true });
  },
});
