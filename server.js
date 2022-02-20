require("dotenv").config();

const express = require("express");
const app = express();
const postRouter = require("./routes/posts");

app.use("/", postRouter);

app.listen(process.env.PORT || 3000, () => console.log("server on"));
