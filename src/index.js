const express = require('express');
const filmeRoutes = require('./routes/filmeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Definindo o prefixo das rotas conforme o requisito /v1/controle-filmes
app.use('/v1/controle-filmes', filmeRoutes);

// Rota padrão para verificar se a API está online
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à API UniFECAF Flix!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
