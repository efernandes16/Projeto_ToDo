const UsuariosDAO = require('../DAO/usuario-dao');

module.exports = (app, bd) => {

  const usuariosDao = new UsuariosDAO(bd);

  app.get('/usuarios', async (req, res) => {

    try {
      const mostraUsuario = await usuariosDao.todosUsuarios()
      res.send(mostraUsuario);
    } catch {
      res.send(erro);
    }
  });

  app.get('/usuarios/:id', async (req, res) => {
    let parametro = req.params.id;
    try {
      const mostraUsuarioUnico = await usuariosDao.buscarUsuarioUnico(parametro)
      res.send(mostraUsuarioUnico);
    } catch {
      res.send(erro);
    }
  });

  app.post('/usuarios', async (req, res) => {
    let valores = [req.body.nome, req.body.email, req.body.senha]
    try {
      const insereUsuario = await usuariosDao.insereUsuarios(valores)
      res.send(insereUsuario);
    } catch {
      res.send(erro);
    }
  });

  app.delete('/usuarios/:id', async (req, res) => {
    let parametro = req.params.id;
    try {
      const deletaUsuarioUnico = await usuariosDao.deletaUsuarios(parametro)
      res.send(deletaUsuarioUnico);
    } catch {
      res.send(erro);
    }
  });

  app.put('/usuarios/:id', async (req, res) => {
    let valores = [req.body.nome, req.body.email, req.body.senha, req.params.id]
    try {
      const atualizaUsuario = await usuariosDao.atualizaUsuarios(valores)
      res.send(atualizaUsuario);
    } catch {
      res.send(erro);
    }
  });

}