const mongoose = require("mongoose");

// Define the schema for user
const playlistSchema = new mongoose.Schema({
  Mood: {
    type: String,
    required: true,
  },
  Language: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  }
});

// Create the User model
const Playlist = mongoose.model("music", playlistSchema);

module.exports = Playlist;

