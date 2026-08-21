const mysql = require("mysql2")

const conexao =mysql.createConnection({
host:"localhost",
user:"root",
password :"root",
database :"clientes"
});
// Dados que serão cadastrados
const clientes = [
['Ana Souza', 47999990000 ],
['Pedro Lima',47988880000 ],
['Juliana Costa',4797777000]
    
    
];
const insert = "INSERT INTO clientes(nome, telefone) VALUES ?";

//envia os dados para mysql
    conexao.query(insert, [clientes], function(erro) {
     if(erro) {
        console.log("Erro ao cadastrar clientes.");
        console.log(erro);
    }else {
        console.log("clientes cadastrado com sucesso!");
    }
    
});   
 
        // ID dos clientes que será excluido
const id = 2;

const deletar = "DELETE FROM  clientes WHERE id = ?";

conexao.query(deletar, [id], function (erro, resultado) {

    if (erro) {
        console.log("Erro ao excluir clientes.");
        console.log(erro);
    } else if (resultado.affectedRows === 0) {
        console.log("clientes não encontrado.");
    } else {
        console.log("clientes excluido!");
    }
    conexao.end();

});