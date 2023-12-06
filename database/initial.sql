-- Create the carros table
CREATE TABLE IF NOT EXISTS carros (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    ano INT NOT NULL,
    preco DECIMAL(18,2) NOT NULL,
    img VARCHAR(255) NOT NULL
);

-- Import data from a CSV file
COPY carros (id, nome, marca, ano, preco, img)
FROM '/var/opt/data/carros.csv' DELIMITER ';' CSV HEADER;
