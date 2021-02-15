
module.exports = class UsuariosDAO  
{
    constructor(bd)
    {
        this.bd = bd;
    }

    todosUsuarios()
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.all('SELECT * FROM USUARIOS', (erro, linhas) => {
                if(erro) reject ("Erro na consulta do banco");
                else resolve(linhas)
              })
        })
    }

    sendPamamsUsuarios(parametro)
    {
        return new Promise((resolve, reject) => 
        {
            this.bd.get('SELECT * FROM USUARIOS WHERE id = ?', parametro, (erro, linhas) =>{
                if(erro) reject ("Erro na consulta do banco");
                else resolve(linhas);
              })
        })
    }

    insereUsuarios(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)', parametro, (erro, linhas) => {
                if(erro) reject('Erro ao inserir usuario');
                else resolve('Usuario inserido com sucesso');
              })
        })
    }

    deletaUsuarios(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('DELETE FROM USUARIOS WHERE ID = ?', parametro, (erro, linhas) => {
                if(erro) {
                  reject('Erro ao inserir usuario')
                } else {
                  resolve('Usuario removido com sucesso');
                }
              })
        })
    }

    atualizaUsuario(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('UPDATE USUARIOS SET ID = ?, nome = ?, email = ?, senha = ? WHERE id = ?', parametro, (erro, linhas) => {
                if(erro) reject('Erro ao atualizar usuario')
                else resolve('Usuario atualizado com sucesso');
              })
        })
    }
}