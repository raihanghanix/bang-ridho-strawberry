const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");

const mongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raihanghanix:Csomantap123@cluster0.oahsfqt.mongodb.net/BRS"
    );
    console.log("Mongo connected!");
  } catch (err) {
    console.log("Cannot connect to Mongo!");
  }
};
mongo();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/all", async (req, res) => {
  const users = await User.find({});
  res.render("all", { users });
});
app.post("/", async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.redirect("/#beli");
  } else {
    const user = await User.insertMany(req.body);
    res.render("success");
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
