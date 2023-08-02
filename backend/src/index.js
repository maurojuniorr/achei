const express = require('express');
const app = express();

const PORT = 3000; // Porta que a API irá escutar

// Rota inicial de exemplo
app.get('/', (req, res) => {
  res.send('API de Achados e Perdidos funcionando!');
});

// Rota de exemplo para lidar com a rota /usuarios
app.get('/usuarios', (req, res) => {
  // Aqui você poderia retornar os usuários cadastrados no banco de dados
  const usuarios = [{ nome: 'Usuário 1' }, { nome: 'Usuário 2' }];
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});


