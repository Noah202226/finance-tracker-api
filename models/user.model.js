const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    email: {
      required: [true, "Please enter an email"],
      type: String,
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      required: [true, "Please provide a password"],
      type: String,
      minlength: [6, "Minimun password length is 6 characters"],
    },
  },
  { timestamps: true }
);

// after doc saved
// UserSchema.post("save", function (doc, next) {
//   console.log("New user was created and saved.", doc);
//   next();
// });
// before doc save
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
