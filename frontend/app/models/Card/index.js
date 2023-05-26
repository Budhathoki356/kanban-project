import { Model } from "backbone";
import api from "../../services";

const CardModel = Model.extend({
  url() {
    return `/cards`;
  },

  updateCard({ id, title, laneId, description }) {
    this.set({ id, title,laneId, description });
    api.patch(`${this.url()}/${id}`, {
      title,
      id,
      laneId,
      description
    });
  },

  deleteCard(id) {
    api.delete(`${this.url()}/${id}`);
  },
});

export default CardModel;
