import { Collection } from "backbone";
import laneModel from "../../models/Lane/index"

var LaneCollection = Collection.extend({
    model: laneModel,
})




export default LaneCollection



