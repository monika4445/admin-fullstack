const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { user_routes } = require("./routes/user");
const { category_routes } = require("./routes/category");
const { product_routes } = require("./routes/product");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

user_routes(app);
category_routes(app);
product_routes(app);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
