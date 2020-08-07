const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "employee", "client"],
    default: "client"
  },
  companyName: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  pointsOfSale: [
    {
      type: Schema.Types.ObjectId,
      ref: 'PointOfSale'
    }
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
