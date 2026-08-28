const mysql = require("mysql2");
const readline = require("readline-sync");

// conexao com o mysql
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "biblioteca"
});

//função para cadastrar livros
function cadastrarlivros() {
    const titulo = readline.question("Digite o nome do titulo: ");
    const autor = readline.question("Digite o  nome do autor: ");

    const insert = "INSERT INTO livros (titulo, autor) VALUES (?, ?)";
    conexao.query(insert, [titulo, autor], function (erro) {
        if (erro) {
            console.log("Erro ao cadastrar livros.");
            console.log(erro);
        }else {
            console.log("livros cadastrado com sucesso!");
        }
        // menu();
    });
}

//funçao para excluir livros
function excluirlivros() {
     const id = readline.questionInt("Digite o ID do livros: ");

     const deletar = "DELETE FROM livros WHERE id = ?";
     
     conexao.query(deletar, [id], function (erro, resultado) {

        if(erro) {
            console.log("Erro ao excluir os livros.");
     } else if (resultado.affectedRows === 0) {
        console.log("livros não encontrado.");
     }else {
        console.log("livros excluido com sucesso!");
     }

     menu();

});

}
// Função para listar livros

function listarlivros() {

const sql = "SELECT * FROM livros";

conexao.query(sql, function (erro, livros) {

if (erro) {

console.log("Erro ao buscar livros.");

} else {


console.log("\n--- LIVROS ---");


livros.forEach(function (livros) {

console.log(

livros.id + " - " +

livros.titulo + " - " +

livros.autor

);

});

}


menu();

});

}



// Menu principal

function menu() {


console.log("\n===== MENU =====");

console.log("1 - Cadastrar livros");

console.log("2 - Excluir livros");

console.log("3 - Listar livros");

console.log("0 - Sair");


const opcao = readline.questionInt("Escolha uma opcao: ");


if (opcao === 1) {


cadastrarlivros();


} else if (opcao === 2) {


excluirlivros();


} else if (opcao === 3) {


listarlivros();


} else if (opcao === 0) {


console.log("Programa encerrado.");

conexao.end();


} else {


console.log("Opcao invalida.");

menu();

}


}
menu();
