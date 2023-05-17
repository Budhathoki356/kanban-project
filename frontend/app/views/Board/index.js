import { View } from "backbone.marionette";
import laneCollection from "../../collections/Lane";

import LaneList from "../LaneList/index";
import template from "./template.pug";

export default View.extend({
  template,

  regions: {
    laneSection: "#lane-section",
  },

  onRender() {
    this.showChildView(
      "laneSection",
      new LaneList({ collection: new laneCollection({id: 1, title: 'Todo'}) })
    );
  },
});
