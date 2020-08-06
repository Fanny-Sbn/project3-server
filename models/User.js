const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ["admin", "employee", "client"],
    default: "client"
  },
  companyName : String,
  email: String,
  password: String,
  phoneNumber: String,
  pointsOfSale: [
    { type: Schema.Types.ObjectId,
    ref: 'PointOfSale' }
],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
