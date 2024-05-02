const { Router } = require("express");
const {
  authLogin,
  signup_post,
  deleteUser,
  updateUser,
} = require("../controller/auth.controller");

const router = Router();

router.get("/login", authLogin);
router.post("/signup", signup_post);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

module.exports = router;
