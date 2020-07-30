const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const machineSchema = new Schema({
    brand: String,
    model: String,
    image: {
        type: String,
        default:
            "./img/coffee-machine.png",
    },
    last_control: Date,
    
    intervention: [{
        title: {
            type: String,
            enum: ["Demande réglages", "Demande entretien", "Demande dépannage", "Demande réapprovisionnement"]
        },
        code: String,
        description: String,
        date: { type: Date, default: new Date() },
        solved: { type: Boolean, default: false }

    }],

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

