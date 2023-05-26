import { Collection } from "backbone";
import CardModel from "../../models/Card";
import api from "../../services";

const CardsCollection = Collection.extend({
  model: CardModel,

  url() {
    return "/cards";
  },

  setCards(cards) {
    cards.forEach((lane) => {
      new CardModel({ ...lane });
    });
  },

  fetch(laneId) {
    return new Promise((resolve, reject) => {
      api
        .get(`${this.url()}?laneId=${laneId}`)
        .done((response) => {
          resolve(response);
        })
        .fail((error) => {
          console.error("Fetch Cards failed", error);
          reject(error);
        });
    });
  },

  createCard({ title, description, laneId }) {
    return new Promise((resolve, reject) => {
      api
        .post(
          this.url(),
          {
            title,
            description,
            laneId,
          },
          { sendAsJSON: true }
        )
        .done((response) => {
          resolve(response);
        });
    });
  },
});

const cardsCollection = new CardsCollection();

export { cardsCollection, CardsCollection };
