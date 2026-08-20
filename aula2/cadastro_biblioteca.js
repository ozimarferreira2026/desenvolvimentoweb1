const mysql = require("mysql2");
// conexao com o mysql

const conexao =mysql.createConnection({
host:"localhost",
user:"root",
password :"root",
database :"biblioteca"
});
// Dados que serão cadastrados
const livros = [
    ["Dom Casmurro", "Machado de Assis"],
    ["O Pequeno Príncipe", "Antoine de Saint-Exupéry"],
    ["1984", "George Orwell"]
];



//comando sql
const insert = "INSERT INTO livros(titulo, autor) VALUES ?";

//envia os dados para mysql
    conexao.query(insert, [livros], function(erro) {
     if(erro) {
        console.log("Erro ao cadastrar o livros.");
        console.log(erro);
    }else {
        console.log("livros cadastrado com sucesso!");
    }
    
});   
 
        // ID do produto que será excluido
const id = 2;

const deletar = "DELETE FROM  livros WHERE id = 2";

conexao.query(deletar, [id], function (erro, resultado) {

    if (erro) {
        console.log("Erro ao excluir livro.");
        console.log(erro);
    } else if (resultado.affectedRows === 0) {
        console.log("livros não encontrado.");
    } else {
        console.log("livros excluido!");
    }
    conexao.end();

});

