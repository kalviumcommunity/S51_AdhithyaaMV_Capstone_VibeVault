const express = require('express');

const { connectToDB, disconnectFromDB, isConnected } = require('./db');
const Playlist = require('./Models/Playlist');
const app = express();

const port = process.env.PUBLIC_PORT ?? 8000;

app.get('/', (req, res) => {
  res.json({
    message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'
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

module.exports = app;
