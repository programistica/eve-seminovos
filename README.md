# Eve Seminovos

Aplicacao web para comercializacao de carros seminovos.

## Autores

- [@programistica](https://www.github.com/programistica)

## status do projeto

Em desenvolvimento

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

| Parâmetro | Tipo     | Descrição        |
| :-------- | :------- | :--------------- |
| `usuario` | `string` | **Obrigatório**. |
| `senha`   | `string` | **Obrigatório**. |

#### Retorna um usuario

```http
  GET /usuario/${usuario}
```

| Parâmetro | Tipo     | Descrição                                                |
| :-------- | :------- | :------------------------------------------------------- |
| `usuario` | `string` | **Obrigatório**. O usuario que deseja saber se ja existe |

#### Retorna um usuario

```http
  GET /usuario/${id}
```

| Parâmetro | Tipo     | Descrição                                                      |
| :-------- | :------- | :------------------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O id do usuario que deseja saber se ja existe |

#### Retorna todos os usuarios

```http
  GET /usuario/
```

#### Cria um carro

```http
  POST /carro/create
```

| Parâmetro | Tipo     | Descrição                                                 |
| :-------- | :------- | :-------------------------------------------------------- |
| `marca`   | `string` | **Obrigatório**. A marca do carro que deseja cadastrar    |
| `modelo`  | `string` | **Obrigatório**. O modelo do carro que deseja cadastrar   |
| `ano`     | `string` | **Obrigatório**. O ano do carro que deseja cadastrar      |
| `preco`   | `string` | **Obrigatório**. O preco do carro que deseja cadastrar    |
| `images`  | `string` | **Obrigatório**. As imagens do carro que deseja cadastrar |

#### Retorna um carro

```http
  GET /carro/${id}
```

| Parâmetro | Tipo     | Descrição                                                    |
| :-------- | :------- | :----------------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O id do carro que deseja saber se ja existe |

#### Retorna todos os carros

```http
  GET /carro/
```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Referencias

- [Vercel](https://vercel.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/)
- [Python](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)
- [NextJs](https://nextjs.org/)
- [Material UI](https://material-ui.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Github](https://www.github.com/)

## features futuras

- [x] Autenticacao
- [x] Autorizacao
- [ ] Testes
- [ ] Deploy
- [ ] CI/CD
- [ ] Paginacao
- [x] Filtros
- [ ] Busca
- [x] Ordenacao
- [ ] Internacionalizacao
- [ ] Tema dark
- [x] Responsividade
- [ ] PWA
- [ ] SSR
- [ ] SSG
- [ ] SEO
- [ ] Analytics
- [ ] Log
- [x] Tratamento de erros
- [ ] Cache
- [ ] Monitoramento
- [ ] Logs
- [ ] Documentacao
- [ ] Swagger

## know-how adquirido

- [x] Docker
- [x] Docker Compose
- [x] PostgreSQL
- [x] Python - Flask
- [x] NextJs - Material UI
- [x] Typescript
- [x] Github
- [x] Autenticacao
- [x] Autorizacao

## Roadmap

- [x] Criar o projeto
- [x] Criar o repositorio
- [x] Criar o README
- [x] Criar o docker-compose
- [x] Criar o dockerfile
- [x] Criar o .gitignore
- [x] Criar o .env
- [x] Criar o banco de dados
- [x] Criar o servidor
- [x] Criar o cliente
- [x] Criar o usuario
- [x] Criar o carro

## Feedback

Se você tiver algum feedback, por favor, entre em contato conosco pelo email evelinecontato@gmail.com
