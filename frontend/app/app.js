import { history } from "backbone";
import { Application, View } from "backbone.marionette";
import BoardView from "./views/Board";
import NewLane from "./views/Lane/NewLane";
import template from "./template.pug";

import { Router } from "./routers";

import "../assets/scss/style.scss";
import LaneList from "./views/LaneList";
import LaneCollection from "./collections/Lane";
import LaneModel from "./models/Lane";

const RootView = View.extend({
  className: "container mt-4",

  template: template,

  regions: {
    nav: "#nav-hook",
    section: "#section-hook",
  },

  onRender() {
    this.showChildView("nav", new BoardView());
  },

  laneList() {
    this.showChildView(
      "section",
      new LaneList({
        collection: new LaneCollection(
          { id: 1, title: "Todo1" },
          { id: 2, title: "Todo2" }
        ),
      })
    );
  },

  newLane() {
    const model = new LaneModel();
    this.showChildView("section", new NewLane({ model: model }));
  },
});

const App = Application.extend({
  region: "#root",

  onStart() {
    const rootView = new RootView();
    this.router = new Router({ rootView: rootView });
    this.showView(rootView);

    history.start({ pushState: true });
  },
});

const app = new App();
export default app;
