const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const machineSchema = new Schema({
    brand: String,
    model: String,
    image: {
        type: String,
        default:
            "./media/coffee-machine.png",
    },
    last_control: Date,

    interventions: [
        { type: Schema.Types.ObjectId,
        ref: 'Intervention' }
    ],

    id_pointofSale: {
        type: Schema.Types.ObjectId,
        ref: "PointOfSale",
    },
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

    });

const Machine = mongoose.model("Machine", machineSchema);

module.exports = Machine;

