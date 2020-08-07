const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointofsaleSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
        },
        formattedAddress: String,
    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    machines: [
        { type: Schema.Types.ObjectId,
        ref: 'Machine' }
    ],
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

    });

const PointOfSale = mongoose.model("PointOfSale", pointofsaleSchema);

module.exports = PointOfSale;
