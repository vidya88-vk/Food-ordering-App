const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/gofoodmern";
const mongoDB = () => {
  //   mongoose.connect(mongoURL, () => {
  //     console.log("connect");
  //   });
  mongoose
    .connect(mongoURL)
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.error("Connection error:", error));
};

module.exports = mongoDB;
