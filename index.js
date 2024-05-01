const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Express App");
});

mongoose
  .connect(
    "mongodb+srv://noaligpitan26:mongodbpassword@finance-api-backend.8defgcz.mongodb.net/?retryWrites=true&w=majority&appName=finance-api-backend"
  )
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((e) => console.log(e));
