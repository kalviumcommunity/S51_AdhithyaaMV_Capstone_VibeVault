const mongoose = require('mongoose');
require("dotenv").config()

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI)
    console.log('📦 connected to MongoDB');
  } catch (err) {
    console.error('❌ error connecting to MongoDB:', err.message);
  }
};

const disconnectFromDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('📦 disconnected from MongoDB');
  } catch (err) {
    console.error('❌ error disconnecting from MongoDB:', err.message);
  }
};

const isConnected=async()=>{
  return (mongoose.connection.readystate===1)
}


module.exports = {
  connectToDB,
  disconnectFromDB,
  isConnected
};