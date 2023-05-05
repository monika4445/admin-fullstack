const bcrypt = require("bcrypt");

const { User } = require(".");
const { generateAccessToken } = require("../jwt/generateToken");
const { registerValidator, loginValidator } = require("../validation");
require("dotenv").config();

async function register(req, res) {
  const { userName, email, password } = req.body;

  const { error } = registerValidator(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);

  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) {
    return res
      .status(400)
      .json("A User account with this email already exists");
  }

  const newUser = {
    userName,
    email,
    password: hashed_password,
    role: 0,
  };
  User.create(newUser)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

async function login(req, res) {
  const { email, password } = req.body;
  const { error } = loginValidator(req.body);
  if (error) {
    return res.status(400).json(error.message);
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(400).json("Email is not correct");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    const token = generateAccessToken(email, user.id, user.role);
    res.send(
      JSON.stringify({
        status: "Logged in",
        jwt: token,
        role: user.role,
        userName: user.userName,
      })
    );
  } else {
    return res.status(400).json("Invalid password");
  }
}

function allUsers(req, res) {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

module.exports = { register, login, allUsers };
