import template from "./template.pug";
import { View } from "backbone.marionette";
import { history } from "backbone";
import lanesCollection from "../../../collections/Lane";

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
    lanesCollection.createLane({
      title: this.ui.laneTitleInput.val(),
    });
    history.navigate("", { trigger: true });
  },
});
