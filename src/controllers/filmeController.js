const Filme = require('../models/Filme');

exports.listarFilmes = async (req, res) => {
    try {
        const filmes = await Filme.getAll();
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar filmes', error: error.message });
    }
};

exports.buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const filme = await Filme.getById(id);
        if (!filme) {
            return res.status(404).json({ message: 'Filme não encontrado' });
        }
        res.status(200).json(filme);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar filme', error: error.message });
    }
};

exports.filtrarFilmes = async (req, res) => {
    try {
        const { nome } = req.query;
        if (!nome) {
            return res.status(400).json({ message: 'O parâmetro "nome" é obrigatório para o filtro' });
        }
        const filmes = await Filme.search(nome);
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao filtrar filmes', error: error.message });
    }
};
