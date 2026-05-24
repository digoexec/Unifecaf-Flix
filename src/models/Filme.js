const db = require('../config/db');

class Filme {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM filmes');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM filmes WHERE id = ?', [id]);
        return rows[0];
    }

    static async search(query) {
        const searchTerm = `%${query}%`;
        const [rows] = await db.query(
            'SELECT * FROM filmes WHERE nome LIKE ? OR sinopse LIKE ?',
            [searchTerm, searchTerm]
        );
        return rows;
    }
}

module.exports = Filme;
