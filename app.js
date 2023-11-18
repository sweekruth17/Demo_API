require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_route = require("./routes/products");
const connectDB = require("./DB/connect");

// console.log(process.env.MONGODB_URL);
app.get("/", (req, res) => {
  res.send("i am live");
});

// to implement the routes
app.use("/api/products", products_route);

const main = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("lisnting at post", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};
main();
