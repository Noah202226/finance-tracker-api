const { Router } = require("express");
const {
  getTransactions,
  getTransaction,
  addTransaction,
  deleteTransaction,
} = require("../controller/transaction.controller");
const router = Router();

router.get("/", getTransactions);
router.get("/:id", getTransaction);
router.post("/", addTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router;
