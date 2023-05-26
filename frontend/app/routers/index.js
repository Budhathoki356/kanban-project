import Mn from "backbone.marionette";

const Controller = Mn.Object.extend({
  default() {
    const rootView = this.getOption("rootView");
    rootView.laneList();
  },

  newLane() {
    const rootView = this.getOption("rootView");
    rootView.newLane();
  }
});

export const Router = Mn.AppRouter.extend({
  initialize(options) {
    this.controller = new Controller(options);
  },

  appRoutes: {
    "": "default",
    "lane": "newLane",
  },
});
