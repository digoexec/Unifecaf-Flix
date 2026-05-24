const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

// Listar todos os filmes
router.get('/filme', filmeController.listarFilmes);

// Buscar um filme pelo ID
router.get('/filme/:id', filmeController.buscarPorId);

// Filtrar filmes por nome ou sinopse
router.get('/filtro/filme', filmeController.filtrarFilmes);

module.exports = router;
