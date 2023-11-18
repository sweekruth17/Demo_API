const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

// const URL =
//   "mongodb+srv://sweekruth:ROFNg02uy4TS0Sgs@sweekruth1.u5lfuyh.mongodb.net/sweekruth1?retryWrites=true&w=majority";

const URL = process.env.MONGODB_URL;
const connectDB = () => {
    console.log("Connecting to mongo DB");
  return mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  });
};

module.exports = connectDB;
