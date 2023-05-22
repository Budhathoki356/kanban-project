import { CompositeView } from "backbone.marionette";
import LaneView from "../Lane/index";
import template from "./template.pug";

export default CompositeView.extend({
  childViewContainer: ".lane",

  childView: LaneView,

  template,

  initialize() {
    this.collection.set([{id:'3', title: 'random'},{id:'4', title: 'todo 4'}, {id:'5', title: 'todo 5'}])
  }
});
