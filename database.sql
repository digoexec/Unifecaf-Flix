CREATE DATABASE IF NOT EXISTS unifecaf_flix;
USE unifecaf_flix;

CREATE TABLE IF NOT EXISTS filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    genero VARCHAR(100),
    ano_lancamento INT,
    diretor VARCHAR(255)
);

INSERT INTO filmes (nome, sinopse, genero, ano_lancamento, diretor) VALUES
('Inception', 'Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos.', 'Ficção Científica', 2010, 'Christopher Nolan'),
('The Matrix', 'Um hacker de computador aprende com rebeldes misteriosos sobre a verdadeira natureza de sua realidade.', 'Ficção Científica', 1999, 'Lana Wachowski, Lilly Wachowski'),
('Interstellar', 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.', 'Ficção Científica', 2014, 'Christopher Nolan'),
('O Poderoso Chefão', 'O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.', 'Crime', 1972, 'Francis Ford Coppola'),
('Pulp Fiction', 'As vidas de dois assassinos de aluguel, um boxeador, um gângster e sua esposa, e um par de assaltantes de restaurante se entrelaçam.', 'Crime', 1994, 'Quentin Tarantino');
