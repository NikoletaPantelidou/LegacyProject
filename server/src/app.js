const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book-routes")

// Middlewares
app.use(express.json())
app.use("/books",router)





mongoose
  .connect(
    "mongodb+srv://book:book@books.nclgdh4.mongodb.net/book?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
  })
  .then(() => {app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
  }).catch((err)=>{
    console.log(err)
  })



