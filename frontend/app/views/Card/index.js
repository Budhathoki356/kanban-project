import { View } from "backbone.marionette";
import LaneModel from "../../models/Lane";
import CardListView from "../CardList/index";
import template from "./template.pug";

export default View.extend({
  className: "card-body bg-white mx-3 mt-3 mb-2 rounded k-card-body",
  template,
  templateContext() {
    return {
      id: this.model.get("id"),
      title: this.model.get("title"),
      description: this.model.get("description"),
      laneId: this.model.get("laneId")
    };
  },
});
