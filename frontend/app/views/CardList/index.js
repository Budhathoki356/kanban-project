import { CompositeView } from "backbone.marionette";
import template from "./template.pug";

export default CompositeView.extend({
  className: "container overflow-auto",

  childViewContainer: ".lane",

  ui: {},

  events: {},


  template,
});
