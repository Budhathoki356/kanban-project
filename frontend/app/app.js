import { View } from "backbone.marionette";
import _ from "underscore";
import BoardView from "./views/Board";

export default View.extend({
  template: _.template('<nav id="nav-hook"></nav><div id="main-hook"></div>'),

  regions: {
    main: "#main-hook",
  },

  onRender() {
    this.showChildView("main", new BoardView());
  },
});
