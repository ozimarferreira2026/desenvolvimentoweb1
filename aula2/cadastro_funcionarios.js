const mysql = require("mysql2")

const conexao =mysql.createConnection({
host:"localhost",
user:"root",
password :"root",
database :"funcionarios"
});
// Dados que serão cadastrados
const funcionarios= [
['João', 'Vendedor', 2500 ],
['Mariana', 'Gerente', 2500],
['Lucas', 'Atendente', 2200 ]
    
    
];
const insert = "INSERT INTO funcionarios(nome, cargo, salario) VALUES ?";

//envia os dados para mysql
    conexao.query(insert, [funcionarios], function(erro) {
     if(erro) {
        console.log("Erro ao cadastrar funcionarios.");
        console.log(erro);
    }else {
        console.log("funcionarios cadastrado com sucesso!");
    }
    
});   
 
        // ID dos funcionarios que será excluido
const id = 50;

const deletar = "DELETE FROM  funcionarios WHERE id = ?";

conexao.query(deletar, [id], function (erro, resultado) {

    if (erro) {
        console.log("Erro ao excluir funcionarios.");
        console.log(erro);
    } else if (resultado.affectedRows === 0) {
        console.log("funcionarios não encontrado.");
    } else {
        console.log("funcionarios excluido!");
    }
     
    conexao.end();

});