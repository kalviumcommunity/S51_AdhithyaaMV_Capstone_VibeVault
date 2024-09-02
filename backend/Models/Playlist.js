const mongoose = require("mongoose");
const { type } = require("os");

const PlaylistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  // Add other fields as needed
});

// Define the schema for user
const playlistSchema = new mongoose.Schema({
  mood: {
    type: String,
    // required: true,
  },
  language: {
    type: String,
    // required: true,
  },
  link: {
    type: String,
    // required: true,
  },
  type : {
    type : String,
  },
  img : {
    type : String,
  },
  name : {
    type : String
  }
});

// Create the User model
const Playlist = mongoose.model("preferences", playlistSchema);

module.exports = Playlist;

