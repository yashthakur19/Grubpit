const mongoose = require('mongoose');
async function connectDB() {
    try{
    await mongoose.connect(process.env.MONGODB_URI)||'mongodb://127.0.0.1:27017/grubpit';
    console.log('MongoDB connected successfully');
    }
    catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
}
module.exports = connectDB;