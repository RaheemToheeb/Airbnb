const mongoose = require("mongoose");
url = "mongodb://localhost/Airnnb";
mongoose.connect(url).then((req, res) => {
  try {
    console.log("Data base connect");
  } catch (error) {
    console.log("Cannot connet to Data base");
  }
});
