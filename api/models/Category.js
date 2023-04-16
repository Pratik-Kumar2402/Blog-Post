const mongoose = require("mongoose");

// creating a shema to be stored as such in mongoDB
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// exporting to be used else-where in project
module.exports = mongoose.model("Category", CategorySchema);
