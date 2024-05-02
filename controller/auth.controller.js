const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const handleErrors = (error) => {
  console.log(error.message, error.code);

  let errors = { email: "", password: "" };

  //   duplicate email error
  if (error.code == 11000) {
    return (errors["email"] = "Email already registered.");
  }

  if (error.message.includes("user validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
const authLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        res.status(201).json({ user });
      }
      throw Error("incorrect password.");
    }
    throw Error("Incorrect Email");
  } catch (err) {
    res.status(400).json(err.message);
  }
};
const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });

    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const deleteUser = async (req, res) => {
  // Delete
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User is deleted successfully." });
  } catch (e) {
    res.status(500).json({ message: e.message + "user not found" });
  }
};

const updateUser = async (req, res) => {
  // Update
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, req.body);

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  authLogin,
  signup_post,
  deleteUser,
  updateUser,
};
