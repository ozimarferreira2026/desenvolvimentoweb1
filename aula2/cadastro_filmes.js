const mysql = require("mysql2")

const conexao =mysql.createConnection({
host:"localhost",
user:"root",
password :"root",
database :"locadora"
});
// Dados que serão cadastrados
const filmes = [
['Interestelar', 2014 ],
['Matrix', 1999 ],
['Toy Story', 1995 ]
    
    
];
const insert = "INSERT INTO filmes(titulo, ano) VALUES ?";

//envia os dados para mysql
    conexao.query(insert, [filmes], function(erro) {
     if(erro) {
        console.log("Erro ao cadastrar filmes.");
        console.log(erro);
    }else {
        console.log("Novo filmes cadastrado com sucesso!");
    }
    
});   
 
        // ID dos filmes que será excluido
const id = 2;

const deletar = "DELETE FROM  filmes WHERE id = ?";

conexao.query(deletar, [id], function (erro, resultado) {

    if (erro) {
        console.log("Erro ao excluir filmes.");
        console.log(erro);
    } else if (resultado.affectedRows === 0) {
        console.log("filmes não encontrado.");
    } else {
        console.log("filmes excluido!");
    }
     
    conexao.end();

});