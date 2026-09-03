const mysql = require("mysql2");
const readline = require("readline-sync");

// conexao com o mysql
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "clientes"
});

//função para cadastrar clientes
function cadastrarclientes() {
    const nome = readline.question("Digite o nome dos clientes: ");
    const telefone = readline.question("Digite o  telefone dos clientes: ");

    const insert = "INSERT INTO clientes (nome, telefone) VALUES (?, ?)";
    conexao.query(insert, [nome, telefone],function (erro) {
        if (erro) {
            console.log("Erro ao cadastrar clientes.");
            console.log(erro);
        }else {
            console.log("clientes cadastrado com sucesso!");
        }
        
        menu();
    });
}

//funçao para excluir clientes
function excluirclientes() {
     const id = readline.questionInt("Digite o ID dos clientes: ");

     const deletar = "DELETE FROM clientes WHERE id = ?";
     
     conexao.query(deletar, [id], function (erro, resultado) {

        if(erro) {
            console.log("Erro ao excluir os clientes.");
     } else if (resultado.affectedRows === 0) {
        console.log("clientes não encontrado.");
     }else {
        console.log("clientes excluido com sucesso!");
     }

     menu();

});

}
// Função para listar clientes

function listarclientes() {

const sql = "SELECT * FROM clientes";

conexao.query(sql, function (erro, clientes) {

if (erro) {

console.log("Erro ao buscar clientes.");

} else {


console.log("\n--- CLIENTES---");


clientes.forEach(function (clientes) {

console.log(

clientes.id + " - " +

clientes.nome + " - " +

clientes.telefone

);

});

}


menu();

});

}



// Menu principal

function menu() {


console.log("\n===== MENU =====");

console.log("1 - Cadastrar clientes");

console.log("2 - Excluir clientes");

console.log("3 - Listar clientes");

console.log("0 - Sair");


const opcao = readline.questionInt("Escolha uma opcao: ");


if (opcao === 1) {


cadastrarclientes();


} else if (opcao === 2) {


excluirclientes();


} else if (opcao === 3) {

listarclientes();


} else if (opcao === 0) {


console.log("Programa encerrado.");

conexao.end();


} else {


console.log("Opcao invalida.");

menu();

}


}
menu();