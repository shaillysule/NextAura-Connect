const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["seller", "user", "admin"],
      default: "user",
    },

    // ✅ NEW FIELDS
    phone: {
      type: String,
      default: "",
    },
    storeName: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);