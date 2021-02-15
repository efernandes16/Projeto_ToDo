const TarefasDAO = require('../DAO/tarefa-dao')

module.exports = (app, bd) => {

    const tarefasDao = new TarefasDAO(bd);

    app.get('/tarefas', async (req, res) => {
    
        try {
            const mostraTarefa = await tarefasDao.todasTarefas();
            res.send(mostraTarefa);
        } catch {
            res.send(erro);
        }
    });
    
    app.get('/tarefas/:id', async (req, res)=> {
        let parametro = req.params.id;
        try {
          const mostraTarefaUnica = await tarefasDao.buscarTarefaUnica(parametro);
          res.send(mostraTarefaUnica);
        } catch {
          res.send(erro);
        }  
      });

    app.post('/tarefas', async (req, res) => {
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario];
        try {
          const insereTarefa = await tarefasDao.insereTarefas(parametro);
          res.send(insereTarefa);
        } catch {
          res.send(erro);
        }  
      });

    app.delete('/tarefas/:id', async (req, res) => {
      let parametro = req.params.id;
      try {
        const deletaTarefaUnica = await tarefasDao.deletaTarefas(parametro);
        res.send(deletaTarefaUnica);
      } catch {
        res.send(erro);
      }  
    });

    app.put('/tarefas/:id', async (req, res) => {
      let parametro = [req.body.id, req.body.titulo, req.body.descricao, req.body.status, req.body.status, req.body.datacriacao, req.body.id_usuario, req.params.id];
      try {
          const atualizaTarefa = await tarefasDao.atualizarTarefas(parametro);
          res.send(atualizaTarefa);
      } catch {
        res.send(erro);
      }  
    });

}