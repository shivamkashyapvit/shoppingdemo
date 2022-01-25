const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  // cart: {
  //   items: [
  //     {
  //       productId: {
  //         type: Schema.Types.ObjectId,
  //         ref: 'Product',
  //         required: true
  //       },
  //       quantity: { type: Number, required: true }
  //     }
  //   ]
  // }
});

module.exports = mongoose.model("user", userSchema);
