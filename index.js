const express = require("express");
const app = express();
const mongoose = require("mongoose");

const productRoute = require("./routes/product.route");
const authRoute = require("./routes/auth.route");
const transactionRoute = require("./routes/transaction.route");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// register view engines
app.set("view engine", "ejs");

// Routes
app.use("/api/products", productRoute);
app.use("/auth", authRoute);
app.use("/transactions", transactionRoute);

app.get("/", (req, res) => {
  // res.send("Hello from Express App");
  res.render("index");
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
