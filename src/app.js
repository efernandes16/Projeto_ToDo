const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./infra/sqlite-db')
const app = express();
const port = 3001;
app.use(bodyParser.json());

/*app.get('/', (req, res) => {
    res.send('Ainda ouve?')
})*/

const usuarioController = require('./controller/usuario-controller')
usuarioController(app, bd)

app.listen(port, () => {
    console.log(`Ta ouvindo no http://localhost:${port}`)
})