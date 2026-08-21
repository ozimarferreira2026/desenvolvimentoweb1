const mysql = require("mysql2")

const conexao =mysql.createConnection({
host:"localhost",
user:"root",
password :"root",
database :"escola"
});
// Dados que serão cadastrados
const professores = [
['Karen Andressa', 'Desenvolvimento Web 1'],
['Juliano ', 'Modelagem Sistema UML'],
['WELLINGTON', 'Linguagem SQL']
    
    
];
const insert = "INSERT INTO professores(nome, disciplina) VALUES ?";

//envia os dados para mysql
    conexao.query(insert, [professores], function(erro) {
     if(erro) {
        console.log("Erro ao cadastrar o professores.");
        console.log(erro);
    }else {
        console.log("professor cadastrado com sucesso!");
    }
    
});   
 
        // ID do professor que será excluido
const id = 2;

const deletar = "DELETE FROM  professores WHERE id = ?";

conexao.query(deletar, [id], function (erro, resultado) {

    if (erro) {
        console.log("Erro ao excluir professor.");
        console.log(erro);
    } else if (resultado.affectedRows === 0) {
        console.log("professores não encontrado.");
    } else {
        console.log("professores excluido!");
    }
    conexao.end();

});

