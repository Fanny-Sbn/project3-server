const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interventionSchema = new Schema({
    title: {
        type: String,
        enum: ["Demande réglages", "Demande entretien", "Demande dépannage", "Demande réapprovisionnement"]
    },
    selectedOption: [String],
    description: {
        type: String,
        default: "Pas de description fournie par le client"
    },
    date: { 
        type: Date, 
        default: new Date()
    },
    solved: { 
        type: Boolean, default: false 
    },
    update:{
        type:String,
        enum:["rea", "entretien", "settings", "depannage"]
    },
    id_machine: {
        type: Schema.Types.ObjectId,
        ref: "Machine",
    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    id_pointofSale: {
        type: Schema.Types.ObjectId,
        ref: "PointOfSale",
    },
    
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

    });

const Intervention = mongoose.model("Intervention", interventionSchema);

module.exports = Intervention;
