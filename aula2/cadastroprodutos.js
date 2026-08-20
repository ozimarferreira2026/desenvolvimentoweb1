const mysql = require("mysql2");
// conexao com o mysql

const conexao =mysql.createConnection({
host:"localhost",
user:"root",
password :"root",
database :"ecommerce"
});
// Dados que serão cadastrados
const nome ="mouse";
const preco =75.50;


//comando sql
const insert =("INSERT INTO produtos(nome, preco) VALUES(?,?)")

//envia os dados para mysql
    conexao.query(insert, [nome, preco], function(erro) {
     if(erro) {
        console.log("Erro ao cadastrar o produto.");
        console.log(erro);
    }else {
        console.log("produto cadastrado com sucesso!");
    }
    
});   
 
        // ID do produto que será excluido
const id = 2;

const deletar = "DELETE FROM  produtos WHERE id = 2";

conexao.query(deletar,[id], function (erro, resultado) {

    if (erro) {
        console.log("Erro ao excluir produto.");
        console.log(erro);
    } else if (resultado.affectdeRows === 0) {
        console.log("produto não encontrado.");
    } else {
        console.log("produto excluido!");
    }
    conexao.end();

});

