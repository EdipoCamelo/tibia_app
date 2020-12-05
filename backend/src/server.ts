import express from 'express';

const app = express();
app.get('/users', (request, response) => {
  console.log('Autenticação de Usuários');

  response.json(['User1', 'User2', 'User3']);
});

app.listen(3333);
