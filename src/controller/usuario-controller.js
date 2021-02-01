const Usuario = require('../models/usuario-model')

module.exports = (app, bd) => {
    app.get('/usuarios', (req, res) =>{
        
        bd.all("SELECT * FROM USUARIOS", (erro, linha) =>{
            if(erro) throw new Erro("Erro de consulta a tabela indicada")
            else(res.send(linha))
        })
    })

    //Rota com parametro
    app.get('/usuarios/:email', (req, res) => {
        for (let i = 0; i < bd.usuarios.length; i++) {
            if (req.params.body == bd.usuarios[i].email) {
                res.send(bd.usuarios[i])
            }
        }
        res.send('Usuario não encontrado')
    })

    app.post('/usuarios', (req, res) =>{
        let usr = new Usuario(req.body.nome, req.body.email, req.body.senha);
        bd.all("INSERT INTO <>", (erro, linha) =>{
            
            // if(erro) throw new Erro("Erro de consulta a tabela indicada")
            // else(res.send(linha))
        })
        res.send('Rota POST de usuarios: OK');
    })
}