import { Model } from "backbone";
import api from "../../services";

const LaneModel = Model.extend({
  url() {
    return `/lanes`;
  },

  updateLane({ id, title }) {
    api.patch(`${this.url()}/${id}`, {
      title: title,
      id: id,
    });
  },
});

export default LaneModel;
