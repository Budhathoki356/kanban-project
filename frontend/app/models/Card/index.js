import { Model } from "backbone";
import api from "../../services";

const CardModel = Model.extend({
  url() {
    return `/cards`;
  },

  validate: function(attrs) {
    if(!attrs.title) {
      return 'Title is required.'
    }
    if(attrs.title.length >= 30) {
      return 'Title should be less than 30 characters.'
    }
    if(!attrs.description) {
      return 'Description is required.'
    }
    if(attrs.description.length >= 180) {
      return 'Description should be less than 180 characters.'
    }
  },

  updateCard({ id, title, laneId, description }) {
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
