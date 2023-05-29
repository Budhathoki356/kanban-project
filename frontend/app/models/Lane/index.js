import { Model } from "backbone";
import api from "../../services";

const LaneModel = Model.extend({
  url() {
    return `/lanes`;
  },

  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required.";
    }

    if (attrs.title.length >= 20) {
      return "Title should be less than 50 character.";
    }
  },

  updateLane({ id, title }) {
    this.set({ id, title });
    api.patch(`${this.url()}/${id}`, {
      title: title,
      id: id,
    });
  },

  deleteLane(id) {
    api.delete(`${this.url()}/${id}`);
  },
});

export default LaneModel;
