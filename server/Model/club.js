const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const myclubSchema = new Schema(
  {
    clubName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    networth: {
      type: String,
      required: true,
    },
    fan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "fans",
      },
    ],
    scout: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "scouts",
      },
    ],
  },
  { timestamps: true }
);

const clubModel = mongoose.model("clubs", myclubSchema);
module.exports = clubModel;
