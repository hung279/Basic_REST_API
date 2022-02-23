const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
const PORT = 8000;

dotenv.config();

const uri = process.env.MONGODB_URL;
mongoose.connect(uri, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/api/author", authorRoute);
app.use("/api/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
