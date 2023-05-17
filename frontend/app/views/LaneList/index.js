import { CollectionView } from "backbone.marionette";
import LaneView from "../Lane/index" 
import template from "./template.pug";

export default CollectionView.extend({
  childViewContainer: '.lane',
  childView: LaneView,
  template,
});
