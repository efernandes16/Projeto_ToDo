module.exports = (app) => {
    app.get('/', (req, res) => {
      res.send('API_ToDo-Mod3 <br> <h1>BEM VIND@S</h1> </br>  <br><strong>Digite localhost:8080 </strong> <br></br> <strong>/usuarios</strong> > Para acessar os Usuários</br>  <br><strong>/tarefas</strong> > Para acessar as Tarefas</br>')
    });
  
}