import { Application } from "backbone.marionette";
import RootView from "./views/Root";

const App = Application.extend({
  region: "#root",

  onStart() {
    this.showView(new RootView());
  },
});

const app = new App();
app.start();
