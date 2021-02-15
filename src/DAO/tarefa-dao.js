module.exports = class TarefasDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    todasTarefas()
    {
        return new Promise((resolve, reject) => 
        {
            this.bd.all('SELECT * FROM TAREFAS', (erro, linhas) => {
                if(erro) reject('Erro na consulta do banco');
                else resolve(linhas);
            })
        })
    }

    buscarTarefaUnica(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.get('SELECT * FROM TAREFAS WHERE id = ?', parametro, (erro, linhas) => {
                if(erro) reject ('Erro na consulta ao banco');
                else resolve(linhas);
            })
        })
    }

    //Diz que insere mas campos estão com null
    insereTarefas(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)', parametro, (erro, linhas) => {
                if(erro) reject('Erro ao inserir tarefa');
                else resolve('Tarefa inserida com sucesso');
                console.log(linhas)
            })
        })
    }

    deletaTarefas(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('DELETE FROM TAREFAS WHERE ID = ?', parametro, (erro, linhas) => {
            if(erro) reject('Erro ao deletar tarefa')
            else resolve('Tarefa removida com sucesso');
            })
        })
    }

    //Não ta funcionando
    atualizarTarefas(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('UPDATE TAREFAS SET ID = ?, titulo = ?, descricao = ?, status = ?, datacriacao = ?, id_usuario = ?', parametro, (erro, linhas) => {
                if(erro) reject('Erro ao atualizar tarefa')
                else resolve('Tarefa atualizada com sucesso')
            })
        })
    }
}