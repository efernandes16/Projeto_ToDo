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
                if(erro) reject ("Erro na consulta ao banco");
                else resolve(linhas)
              })
        })
    }

    buscarUsuarioUnico(parametro)
    {
        return new Promise((resolve, reject) => 
        {
            this.bd.get('SELECT * FROM USUARIOS WHERE id = ?', parametro, (erro, linhas) =>{
                if(erro) reject ("Erro na consulta ao banco");
                else resolve(linhas);
              })
        })
    }

    insereUsuarios(valores)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)', valores, (erro) => {
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
                if(erro) reject('Erro ao deletar usuario')
                else resolve('Usuario removido com sucesso');
              })
        })
    }

    atualizaUsuarios(valores)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('UPDATE USUARIOS SET nome = ?, email = ?, senha = ? WHERE id = ?', valores, (erro) => {
                if(erro) reject('Erro ao atualizar usuario')
                else resolve('Usuario atualizado com sucesso');
              })
        })
    }
}