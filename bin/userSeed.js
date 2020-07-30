require("dotenv").config();

const mongoose = require("mongoose");
const User = require("../models/User");

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        role: "client",
        companyName: "Amer",
        email: "john@gmail.com",
        password: "12344",
        phoneNumber: "5286697"
    },
    {
        firstName: "Foo",
        lastName: "Bar",
        role: "admin",
        companyName: "Baz",
        email: "foo@gmail.com",
        password: "1234",
        phoneNumber: "5286697"
    },
    {
        firstName: "jean",
        lastName: "Dupont",
        role: "client",
        companyName: "Duponte",
        email: "jean@gmail.com",
        password: "1234",
        phoneNumber: "5286697"
    },
];

(async () => {
    try {
        const self = await mongoose.connect(process.env.MONGODB_URI);
        const user = await User.create(users);
        console.log(`Created user ${user.firstName}`);
        console.log(`Connection to ${self.connection.name} succesful.`);
    } catch (error) {
        console.log(`An error has occured while seeding... ${error}`);
    }
})();