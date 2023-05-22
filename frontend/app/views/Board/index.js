import { history } from "backbone";
import { View } from "backbone.marionette";
import template from "./template.pug";

export default View.extend({
  template,

  ui: {
    addLaneBtn: ".btn-lane-add",
  },

  events: {
    "click @ui.addLaneBtn": "addLane",
  },

  addLane() {
    history.navigate("lane", { trigger: true });
  },
});
