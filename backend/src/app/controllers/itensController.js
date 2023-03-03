const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itensController');
const authMiddleware = require('../middlewares/auth.js');

const Item = require('../models/Item');

// Listar todos os itens
exports.listItems = async (req, res) => {
  try {
    const items = await Item.find({}).populate('user');
    res.json(items);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Listar itens por usuário
exports.getItemsByUser = async (req, res) => {
  try {
    const items = await Item.find({ user: req.userId }).populate('user');
    res.json(items);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Criar novo item
exports.createItem = async (req, res) => {
  try {
    const { name, model, category, serialNumber, brand, wereFounded, foundAt, returned } = req.body;
    const user = req.userId; // Id do usuário que adicionou o item
    const item = await Item.create({ name, model, category, serialNumber, brand, wereFounded, foundAt, returned, user });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Atualizar item
exports.updateItem = async (req, res) => {
  try {
    const { name, model, category, serialNumber, brand, wereFounded, foundAt, returned } = req.body;
    const user = req.userId; // Id do usuário que adicionou o item
    const item = await Item.findOneAndUpdate({ _id: req.params.id, user }, { name, model, category, serialNumber, brand, wereFounded, foundAt, returned }, { new: true });
    if (!item) {
      return res.status(404).send({ message: 'Item não encontrado' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Deletar item
exports.deleteItem = async (req, res) => {
  try {
    const user = req.userId; // Id do usuário que adicionou o item
    const item = await Item.findOneAndDelete({ _id: req.params.id, user });
    if (!item) {
      return res.status(404).send({ message: 'Item não encontrado' });
    }
    res.json({ message: 'Item removido com sucesso' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
