import { View } from "backbone.marionette";
import BoardView from '../Board/index'
import template from './template.pug'

export default View.extend({
  template,

  regions: {
    main: "#main-hook",
  },

  onRender() {
    this.showChildView("main", new BoardView());
  },
});
