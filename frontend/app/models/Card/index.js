import { Model } from "backbone";
import api from "../../services";

const CardModel = Model.extend({
  url() {
    return `/cards`;
  },
});

export default CardModel;
