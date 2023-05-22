import { Collection } from "backbone";
import LaneModel from "../../models/Lane/index"

const LaneCollection = Collection.extend({
    model: LaneModel,
})

export default LaneCollection



