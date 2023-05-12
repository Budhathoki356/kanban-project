import { View } from "backbone.marionette";
import BoardView from '../Board/index'
import template from './template.pug'

export default View.extend({
  template,

  regions: {
    main: "#board",
  },

  onRender() {
    this.showChildView("main", new BoardView());
  },
});
