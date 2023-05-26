import { Model } from "backbone";
import api from "../../services";

const LaneModel = Model.extend({
  url() {
    return `/lanes`;
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
