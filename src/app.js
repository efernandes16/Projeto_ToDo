const express = require('express')
const bodyParser = require('body-parser');

const indexControllers = require('./controller/index-controllers');
const usuariosController = require('./controller/usuario-controller');
const tarefasController = require('./controller/tarefa-controller');

const bd = require('./infra/sqlite-db.js');

const port = 8080;

const app = express();
app.use(bodyParser.json());

indexControllers(app);
usuariosController(app, bd);
tarefasController(app, bd);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})