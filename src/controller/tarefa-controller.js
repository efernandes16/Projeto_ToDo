module.exports = (app) => {
    app.get('/tarefas', (req, res) => {
    res.send('<h1>Tarefas com GET</h1>')
    });

    app.post('/tarefas', (req, res) => {
        res.send('<h1>Tarefas com POST</h1>')
    });
}