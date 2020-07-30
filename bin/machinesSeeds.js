require("dotenv").config();

const mongoose = require("mongoose");
const Machine = require("../models/Machine");

const machines = [
    {
        brand: "N&W",
        model: "YHUDT5",
        intervention:[{title: "Demande réglages"}],
        id_pointofSale: "5f2277bd3843b608769e9bc2",
    },
    {
        brand: "N&W",
        model: "YHUDT5",
        intervention:[{title: "Demande réglages"}],
        id_pointofSale: "5f2277bd3843b608769e9bc2",
    },
    {
        brand: "Necta",
        model: "YHTDYDG",
        intervention:[{title: "Demande entretien"},{title: "Demande entretien", solved:true}],
        id_pointofSale: "5f2277bd3843b608769e9bc3",
    },

    {
        brand: "Oucma",
        model: "YHTDYDG",
        intervention:[{title: "Demande entretien"},{title: "Demande entretien", solved:true}],
        id_pointofSale: "5f2277bd3843b608769e9bc4",
    }
];

(async () => {
    try {
        const self = await mongoose.connect(process.env.MONGODB_URI);
        const user = await Machine.create(machines);
        console.log(`Connection to ${self.connection.name} succesful.`);
    } catch (error) {
        console.log(`An error has occured while seeding... ${error}`);
    }
})();