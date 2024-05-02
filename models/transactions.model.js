const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    transactionName: {
      type: String,
      required: [true, "Provide a transaction name."],
    },
    type: {
      type: String,
      required: true,
    },
    amount: { type: Number, required: true },
    source: { type: String, required: true },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("transaction", TransactionSchema);

module.exports = Transaction;
