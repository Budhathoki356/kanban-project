import { Collection } from "backbone";
import LaneModel from "../../models/Lane/index";
import api from "../../services";

const LaneCollection = Collection.extend({
  model: LaneModel,

  url() {
    return "/lanes";
  },

  setLanes(lanes) {
    lanes.forEach((lane) => {
      new LaneModel({ ...lane });
    });
  },

  fetch() {
    return new Promise((resolve, reject) => {
      api
        .get(this.url())
        .done((response) => {
          this.add(response);
          resolve(true);
        })
        .fail((error) => {
          console.error("Fetch Lanes failed", error);
          reject(error);
        });
    });
  },

  createLane({ title }) {
    api
      .post(
        this.url(),
        {
          title: title,
        },
        { sendAsJSON: true }
      )
      .done((response) => {
        this.push(new LaneModel({ ...response }));
      });
  },
});

const laneCollection = new LaneCollection()

export default laneCollection;
