import mongoose from "mongoose"

const dealSchema = new mongoose.Schema({
    title: {type: String, required: true},
    value: {type: Number, required: true},
    customer: {type: String, required: true},
    lead: {type: String, required: true}
})

const dealModel = mongoose.models.deal || mongoose.model("deal",dealSchema);

export default dealModel;