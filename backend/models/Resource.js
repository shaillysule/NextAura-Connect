const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
    availableFrom: Date,
    availableTo: Date,
    address: {
      type: String,
      default: "",
    },
    location: {
      lat: Number,
      lng: Number,
    },
    image: {
      type: String,
      default: "",
    },
    // ✅ "owner" is the correct field name — links to User
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);