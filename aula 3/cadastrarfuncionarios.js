const mysql = require("mysql2");
const readline = require("readline-sync");

// conexao com o mysql
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "empresas"
});

//função para cadastrar funcionarios
function cadastrarfuncionios() {
    const nome = readline.question("Digite o nome dos funcionarios: ");
    const cargo = readline.question("Digite o  cargo dos funcionarios: ");

    const insert = "INSERT INTO funcionarios (nome, cargo) VALUES (?, ?)";
    conexao.query(insert, [nome, cargo],function (erro) {
        if (erro) {
            console.log("Erro ao cadastrar funcionarios.");
            console.log(erro);
        }else {
            console.log("funcionarios cadastrado com sucesso!");
        }
        
        menu();
    });
}

//funçao para excluir funcionarios
function excluirfuncionarios() {
        const id = readline.questionInt("Digite o ID dos funcionarios: ");

     const confirmar = readline.questionInt("Deseja realmente excluir este funcionários? (S/N): ");

     if (confirmar.toUpperCase() == "S") {

     const deletar = "DELETE FROM funcionarios WHERE id = ?";
     conexao.query(deletar, [id], function (erro, resultado) {

        if(erro) {
            console.log("Erro ao excluir os funcionarios.");
        } else if (resultado.affectedRows === 0) {
             console.log("funcionarios não encontrado.");
        }else {
             console.log("funcionarios excluido com sucesso!");
        }

     menu();

});

}
}
 
// Função para listar funcionarios

function listarfuncionarios() {

const sql = "SELECT * FROM funcionarios";

conexao.query(sql, function (erro, funcionarios) {

if (erro) {

console.log("Erro ao buscar funcionarios.");

} else {


console.log("\n--- FUNCIONARIOS---");


funcionarios.forEach(function (funcionarios) {

console.log(

funcionarios.id + " - " +

funcionarios.nome + " - " +

funcionarios.cargo

);

});

}


menu();

});

}



// Menu principal

function menu() {


console.log("\n===== MENU =====");

console.log("1 - Cadastrar funcionarios");

console.log("2 - Excluir funcionarios");

console.log("3 - Listar funcionarios");

console.log("0 - Sair");


const opcao = readline.questionInt("Escolha uma opcao: ");


if (opcao === 1) {


cadastrarfuncionarios();


} else if (opcao === 2) {


excluirfuncionarios();


} else if (opcao === 3) {

listarfuncionarios();


} else if (opcao === 0) {


console.log("Programa encerrado.");

conexao.end();


} else {


console.log("Opcao invalida.");

menu();

}


}

menu();