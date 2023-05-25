import { CompositeView } from "backbone.marionette";
import Card from "../Card";
import template from "./template.pug";

export default CompositeView.extend({
  template,
  childViewContainer: ".k-card",
  childView: Card,
});
