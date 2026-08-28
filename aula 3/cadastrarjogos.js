const mysql = require("mysql2");
const readline = require("readline-sync");

// conexao com o mysql
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jogos"
});

//função para cadastrar jogos
function cadastrarjogos() {
    const nome = readline.question("Digite o nome dos jogos: ");
    const genero = readline.question("Digite o  genero: ");

    const insert = "INSERT INTO jogos (nome, genero) VALUES (?, ?)";
    conexao.query(insert, [nome, genero], function (erro) {
        if (erro) {
            console.log("Erro ao cadastrar jogos.");
            console.log(erro);
        }else {
            console.log("jogos cadastrado com sucesso!");
        }
        // menu();
    });
}

//funçao para excluir jogos
function excluirjogos() {
     const id = readline.questionInt("Digite o ID do jogos: ");

     const deletar = "DELETE FROM jogos WHERE id = ?";
     
     conexao.query(deletar, [id], function (erro, resultado) {

        if(erro) {
            console.log("Erro ao excluir os jogos.");
     } else if (resultado.affectedRows === 0) {
        console.log("jogos não encontrado.");
     }else {
        console.log("jogos excluido com sucesso!");
     }

     menu();

});

}
// Função para listar jogos

function listarjogos() {

const sql = "SELECT * FROM jogos";

conexao.query(sql, function (erro, jogos) {

if (erro) {

console.log("Erro ao buscar jogos.");

} else {


console.log("\n--- JOGOS---");


jogos.forEach(function (jogos) {

console.log(

jogos.id + " - " +

jogos.nome + " - " +

jogos.genero

);

});

}


menu();

});

}



// Menu principal

function menu() {


console.log("\n===== MENU =====");

console.log("1 - Cadastrar jogos");

console.log("2 - Excluir jogos");

console.log("3 - Listar jogos");

console.log("0 - Sair");


const opcao = readline.questionInt("Escolha uma opcao: ");


if (opcao === 1) {


cadastrarjogos();


} else if (opcao === 2) {


excluirjogos();


} else if (opcao === 3) {


listarjogos();


} else if (opcao === 0) {


console.log("Programa encerrado.");

conexao.end();


} else {


console.log("Opcao invalida.");

menu();

}


}
menu();