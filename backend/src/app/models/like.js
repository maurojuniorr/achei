const mongoose = require('mongoose');

// Defina o esquema do modelo 'Like' usando o Mongoose
const likeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  dataCurtida: {
    type: Date,
    default: Date.now
  }
});

// Crie o modelo 'Like' com base no esquema definido acima
const Like = mongoose.model('Like', likeSchema);

// Exporte o modelo para que possa ser utilizado em outros arquivos
module.exports = Like;
