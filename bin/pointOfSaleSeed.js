require("dotenv").config();

const mongoose = require("mongoose");
const PointOfSale = require("../models/PointOfSale");

const pointsOfSale = [
    {
        name: "Café Richard",
        id_user: "5f22771410e65a084495f1bc",
    },
    {
        name: "FooBar",
        id_user: "5f22771410e65a084495f1bc",
    },
    {
        name: "Boulangerie ",
        id_user: "5f22771410e65a084495f1bd",
    },

    {
        name: "heyhey",
        id_user: "5f22771410e65a084495f1be"
    }
];

(async () => {
    try {
        const self = await mongoose.connect(process.env.MONGODB_URI);
        const user = await PointOfSale.create(pointsOfSale);
        console.log(`Connection to ${self.connection.name} succesful.`);
    } catch (error) {
        console.log(`An error has occured while seeding... ${error}`);
    }
})();