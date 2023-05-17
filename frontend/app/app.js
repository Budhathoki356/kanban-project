import { history } from 'backbone'
import { Application, View } from "backbone.marionette";
import BoardView from './views/Board'

import Router from './routers'

import '../assets/scss/style.scss'
import Board from './views/Board';

const App = Application.extend({
  region: "#root",

  onStart() {
    this.showView(new Board())
    this.router = new Router()
    history.start({ pushState: true })
  },
});

const app = new App();
export default app