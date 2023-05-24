import { history } from "backbone";
import { Application, View } from "backbone.marionette";
import BoardView from "./views/Board";
import NewLane from "./views/Lane/NewLane";
import template from "./template.pug";

import { Router } from "./routers";

import "../assets/scss/style.scss";
import LaneList from "./views/LaneList";
import lanesCollection from "./collections/Lane";
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
    lanesCollection.fetch();

    this.showChildView(
      "section",
      new LaneList({
        collection: lanesCollection,
      })
    );
  },

  newLane() {
    this.showChildView("section", new NewLane({ model: new LaneModel() }));
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
