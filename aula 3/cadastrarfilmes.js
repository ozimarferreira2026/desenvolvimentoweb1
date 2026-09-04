const mysql = require("mysql2");
const readline = require("readline-sync");

// conexao com o mysql
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cadastrarfilmes"
});

//função para cadastrar filmes
function cadastrarfilmes() {
    const titulo= readline.question("Digite o titulo: ");
    const ano = readline.question("Digite o  ano do filme: ");

    const insert = "INSERT INTO filmes (titulo, ano) VALUES (?, ?)";
    conexao.query(insert, [titulo, ano],function (erro) {
        if (erro) {
            console.log("Erro ao cadastrar filmes.");
            console.log(erro);
        }else {
            console.log("filmes cadastrado com sucesso!");
        }
        
        
        menu();
    });
}

//funçao para excluir filmes
function excluirfilmes() {
     const id = readline.questionInt("Digite o id dos filmes: ");

     const deletar = "DELETE FROM filmes WHERE id = ?";
     
     conexao.query(deletar, [id], function (erro, resultado) {

        if(erro) {
            console.log("Erro ao excluir os filmes.");
            console.log(erro)
     } else if (resultado.affectedRows === 0) {
        console.log("filmes não encontrado.");
     }else {
        console.log("filmes excluido com sucesso!");
     }

     menu();

});

}

// filme atualizado
function atualizarfilme(){
    const id = readline.questionInt(" Informe o id do filme");
    const titulo = readline.question("Informe o novo titulo do filme:");
    const ano = readline.question("Informe o novo ano do filme:");

    const update = "UPDATE filmes SET titulo = ? ano = ? WHERE id = ?";
    conexao.query(update, [titulo, ano, id], function(erro, resultado){
        if(erro){
            console.log("Erro ao atualizar o filme.");
            console.log(erro);
        }else if(resultado.affectedRow===0){
            console.log("Filme não encontrado.")
        }else{
            console.log("filme atualizado com sucesso!");
        }
        menu();
    });
        
    }
// Função para listar filmes

function listarfilmes() {

const sql = "SELECT * FROM filmes ORDER BY titulo ASC";

conexao.query(sql, function (erro, filmes) {

if (erro) {

console.log("Erro ao buscar filmes.");

} else {


console.log("\n--- FILMES---");


filmes.forEach(function (clientes) {

console.log(

filmes.id + " - " +

filmes.titulo + " - " +

filmes.ano

);

});

}


menu();

});

}



// Menu principal

function menu() {


console.log("\n===== MENU =====");

console.log("1 - Cadastrar filmes");

console.log("2 - Excluir filmes");

console.log("3 - Listar filmes");

console.log("0 - Sair");


const opcao = readline.questionInt("Escolha uma opcao: ");


if (opcao === 1) {


cadastrarfilmes();


} else if (opcao === 2) {


excluirfilmes();


} else if (opcao === 3) {

listarfilmes();


} else if (opcao === 0) {


console.log("Programa encerrado.");

conexao.end();


} else {


console.log("Opcao invalida.");

menu();

}


}
menu();