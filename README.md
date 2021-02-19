# Projeto API ToDo 

<h2>Bem vind@s a API To_Do !</h2>

Esta API foi desenvolvida para atender ao projeto de conclusão do módulo 3 do curso de Desenvolvedor Web Full Stack da Resília.

Esta API permite que você execute um CRUD com dados de usuários e tarefas, relacionados entre-si. Toda aplicação que consuma esta API poderá servir de controle de tarefas, 
validação de usuário e senha das mesmas, entre outras finalidades.

Este arquivo te orientará a manusear esta API para esta finalidade.

<h3>Fique a vontade!</h3>

# Para utilização da API
<h2>Instalando as depêndencias do projeto</h2>

<ul>
<li>Abra um terminal (Microsoft Powershell, CMD, terminal do Virtual Studio Code, etc) no diretório do projeto do seu dispositivo.</li>
<li>Insira o comando <strong>npm install</strong> para baixar todas as depêndencias necessárias para o projeto.</li>
<li>Após a instalação das depêndencias (pode levar alguns minutos), insira o comando <strong>npm start</strong> para ativar o servidor da API no seu dispositivo.</li>
</ul>

<h2>Executando a API</h2>

Com o servidor da API ativo localmente, a partir de um software de manipulação de verbos HTTP no padrão REST, acesse <a>http://localhost:8080</a>. <br>
Nesta página você encontrará uma tela de boas-vindas e orientações iniciais para acessar as rotas <strong>Usuários</strong> e <strong>Tarefas</strong>. <br>

<h3>Softwares de manipulação de verbos HTTP:</h3> Insominia, Postman, etc.

<h2>Manipulações disponíveis</h2>

Verbos HTTP REST: 
<ul>
<li><strong>GET</strong>: listar dados registrados no banco</li>
<li><strong>POST</strong>: inserir novo registro no banco</li>
<li><strong>PUT</strong>: alterar registro já existente no banco</li>
<li><strong>DELETE</strong>: deletar registros existente no banco</li>
</ul>

<h2>Rotas</h2>

<h3>Para USUÁRIOS:</h3>

Para <strong>listar</strong> todos os usuários:<br>
Verbo HTTP: <strong>GET</strong> <br>
Rota: <a>http://localhost:8080/usuarios</a> <br>

Para <strong>listar</strong> um único usuário: <br>
Verbo HTTP: <strong>GET</strong> <br>
Rota: <a>http://localhost:8080/usuarios/id</a> <br>

Para <strong>inserir</strong> novos usuários: <br>
Verbo HTTP: <strong>POST</strong> <br>
Rota: <a>http://localhost:8080/usuarios</a> <br>

Para <strong>deletar</strong> um usuário:<br>
Verbo HTTP: <strong>DELETE</strong> <br>
Rota: <a>http://localhost:8080/usuarios/id</a> <br>

Para <strong>atualizar</strong> qualquer registro de um usuário:<br>
Verbo HTTP: <strong>PUT</strong> <br>
Rota: <a>http://localhost:8080/usuarios/id</a> <br>

<h3>Para TAREFAS:</h3>

Para <strong>listar</strong> todas as tarefas: <br>
Verbo HTTP: <strong>GET</strong> <br>
Rota: <a>http://localhost:8080/tarefas</a> <br>

Para <strong>listar</strong> uma única tarefa: <br>
Verbo HTTP: <strong>GET</strong> <br>
Rota: <a>http://localhost:8080/tarefas/id</a> <br>

Para <strong>inserir</strong> novas tarefas: <br>
Verbo HTTP: <strong>POST</strong> <br>
Rota: <a>http://localhost:8080/tarefas</a> <br>

Para <strong>deletar</strong> uma tarefa: <br>
Verbo HTTP: <strong>DELETE</strong> <br>
Rota: <a>http://localhost:8080/tarefas/id</a> <br>

Para <strong>atualizar</strong> qualquer registro de uma tarefa: <br>
Verbo HTTP: <strong>PUT</strong> <br>
Rota: <a>http://localhost:8080/tarefas/id</a> <br>
#
