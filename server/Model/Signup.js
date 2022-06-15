const mongoose = require("mongoose");
const signUpSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
      unique: true,
    },
    avatar: {
      type: String,
    },
    avatarId: {
      type: String,
    },
    phone: {
      type: String,
    },
  }
  //   { timestamps: true }
);

module.exports = mongoose.model("Signin", signUpSchema);
