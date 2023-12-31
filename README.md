
# Eve Seminovos

Aplicacao web para comercializacao de carros seminovos.


## Autores

- [@programistica](https://www.github.com/programistica)


## Stack utilizada

**Front-end:** Typescript, NextJs, Material UI

**Back-end:** Python, Flask

**Database:** PostgreSQL


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/programistica/eve-seminovos.git
```

Entre no diretório do projeto

```bash
  cd eve-seminovos
```

Inicie o servidor

```bash
  docker-compose build
  docker-compose up
```




## Documentação da API

#### Cria usuario

```http
  POST /usuario/create
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `usuario` | `string` | **Obrigatório**.|
| `senha`| `string` | **Obrigatório**.

#### Retorna um usuario

```http
  GET /usuario/${usuario}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `usuario`      | `string` | **Obrigatório**. O usuario que deseja saber se ja existe |



