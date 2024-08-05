const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser")

const { connectToDB, disconnectFromDB, isConnected } = require('./db');
const Playlist = require('./Models/Playlist');
const app = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PUBLIC_PORT ?? 8000;

app.get('/', (req, res) => {
  
  res.json({
    message: 'o_O',
    database: isConnected ? 'connected' : 'disconnected'
  })
});

if (require.main === module) {
  app.listen(port, async () => {
    await connectToDB();

    console.log(`🚀 server running on PORT: ${port}`);
  });
}

app.get("/get", async (req, res) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  try {
    const playlist = await Playlist.find();
    res.status(200).json(playlist);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/post", async (req, res) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  try {
    console.log(req.body)
    const input = req.body
    // Assuming req.body contains the data for the new playlist
    const newPlaylist = new Playlist(input);
    await newPlaylist.save();
    res.status(201).json(newPlaylist); // Return the created playlist
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
      return res.json([]);
  }
  try {
      const results = await Playlist.find({ name: new RegExp(query, 'i') }); // Case-insensitive search
      res.json(results);
  } catch (error) {
      console.error('Error fetching search results:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
 

module.exports = app;
