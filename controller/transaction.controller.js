const Transaction = require("../models/transactions.model");

const getTransactions = async (req, res) => {
  try {
    const txs = await Transaction.find();
    res.status(201).json(txs);
  } catch (e) {
    console.log(e.message);
    res.status(401).json(e.message);
  }
};

const getTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findById(id);
    res.status(201).json(transaction);
  } catch (e) {
    console.log(e.message);
    res.status(401).json;
  }
};

const addTransaction = async (req, res) => {
  try {
    const tx = await Transaction.create(req.body);
    res.status(201).json(tx);
  } catch (e) {
    console.log(e);
    res.status(401).json(e.message);
  }
};

const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const tx = await Transaction.findByIdAndDelete(id);
    res.status(201).json(tx);
  } catch (err) {
    res.status(401).json(err.message);
  }
};

module.exports = {
  addTransaction,
  getTransaction,
  getTransactions,
  deleteTransaction,
};
