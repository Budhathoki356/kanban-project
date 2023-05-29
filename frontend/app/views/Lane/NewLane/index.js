import template from "./template.pug";
import { View } from "backbone.marionette";
import { history } from "backbone";
import lanesCollection from "../../../collections/Lane";
import LaneModel from "../../../models/Lane";

export default View.extend({
  className: "row mt-4",

  template,

  ui: {
    laneSaveBtn: ".btn-lane-save",
    laneTitleInput: ".lane-title",
    errorMsg: ".text-danger",
    form: 'form'
  },

  events: {
    "click @ui.laneSaveBtn": "saveLane",
  },

  saveLane(e) {
    const laneModel = new LaneModel({ title: this.ui.laneTitleInput.val() });

    if (laneModel.isValid()) {
      lanesCollection.createLane({
        title: this.ui.laneTitleInput.val(),
      });
      history.navigate("", { trigger: true });
    } else {
      e.preventDefault();
      this.ui.errorMsg.text(laneModel.validationError);
    }
  },
});
