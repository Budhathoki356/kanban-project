import { Router } from "backbone";
import app from "../app";
import Board from "../views/Board";
import NewLane from "../views/Lane/NewLane";

export default Router.extend({
  views: {
    board: null,
    newLane: null,
  },

  routes: {
    "": "board",
    newLane: "newLane",
  },

  initialize() {},

  board() {},

  newLane() {
    new NewLane().render()
  },
});
