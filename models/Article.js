const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    headline: {
      type: String,
      required: true,
      minlength: 5,
      trim: true
    },

    story: {
      type: String,
      required: true,
      minlength: 50
    },

    author: {
      name: {
        type: String,
        required: true,
        default: "Anonymous"
      },
      profession: {
        type: String,
        default: "Writer"
      }
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Technology",
        "Education",
        "Health",
        "Business",
        "Lifestyle",
        "Other"
      ]
    },

    tags: [
      {
        type: String
      }
    ],

    readingTime: {
      type: Number,
      default: 1
    },

    featured: {
      type: Boolean,
      default: false
    },

    views: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    }
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("Article", articleSchema);