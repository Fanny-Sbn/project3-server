const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interventionSchema = new Schema({
    title: {
        type: String,
        enum: ["Demande réglages", "Demande entretien", "Demande dépannage", "Demande réapprovisionnement"]
    },
    selectedOption: [String],
    description: String,
    date: { 
        type: Date, 
        default: new Date() 
    },
    solved: { 
        type: Boolean, default: false 
    },

    id_machine: {
        type: Schema.Types.ObjectId,
        ref: "Machine",
    },
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

    });

const Intervention = mongoose.model("Intervention", interventionSchema);

module.exports = Intervention;
