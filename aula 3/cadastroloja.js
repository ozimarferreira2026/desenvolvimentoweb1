const mysql = require("mysql2");
const readline = require("readline-sync");

// conexao com o mysql
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "loja"
});

//função para cadastrar produto
function cadastrarproduto() {
    const nomedoproduto= readline.question("Digite o nome do produto: ");
    const preco = readline.question("Digite o preco do produto: ");
    const quantidadae = readline.question("Digite o quantidade do produto: ");
    
    const insert = "INSERT INTO alunos (nome, preco, quantidade) VALUES (?, ?)";
    conexao.query(insert, [nome, preco, quantidade], function (erro) {
        if (erro) {
            console.log("Erro ao cadastrar.");
            console.log(erro);
        }else {
            console.log("Produto cadastrado com sucesso!");
        }
        // menu();
    });
}

//funçao para excluir produto
function excluirproduto() {
     const id = readline.questionInt("Digite o ID do produto: ");

     const deletar = "DELETE FROM produtos WHERE id = ?";
     
     conexao.query(deletar, [id], function (erro, resultado) {

        if(erro) {
            console.log("Erro ao excluir o produto.");
     } else if (resultado.affectedRows === 0) {
        console.log("produto não encontrado.");
     }else {
        console.log("produto excluido com sucesso!");
     }

     menu();

});

}



// Função para listar produtos

function listarprodutos() {


const sql = "SELECT * FROM produtos";


conexao.query(sql, function (erro, produtos) {


if (erro) {

console.log("Erro ao buscar produtos.");

} else {


console.log("\n--- PRODUTOS---");


alunos.forEach(function (produtos) {

console.log(

nome.id + " - " +

preco.nome + " - " +

quantidade

);

});

}


menu();

});

}



// Menu principal

function menu() {


console.log("\n===== MENU =====");

console.log("1 - Cadastrar produtos");

console.log("2 - Excluir produtos");

console.log("3 - Listar produtos");

console.log("0 - Sair");


const opcao = readline.questionInt("Escolha uma opcao: ");


if (opcao === 1) {


cadastrarprodutos();


} else if (opcao === 2) {


excluirprodutos();


} else if (opcao === 3) {


listarprodutos();


} else if (opcao === 0) {


console.log("Programa encerrado.");

conexao.end();


} else {


console.log("Opcao invalida.");

menu();

}

}

// Função para listar produtos

function listarprodutos() {


const sql = "SELECT * FROM produtos";


conexao.query(sql, function (erro, produtos) {


if (erro) {

console.log("Erro ao buscar produtos.");

} else {


console.log("\n--- produtos---");


alunos.forEach(function (produtos) {

console.log(

nome.id + " - " +

preco+ " - " +

quantidade

);

});

}


menu();

});
}

// menu principal
function menu() {


console.log("\n===== MENU =====");

console.log("1 - Cadastrar produtos");

console.log("2 - Excluir produtos");

console.log("3 - Listar produtos");

console.log("0 - Sair");


const opcao = readline.questionInt("Escolha uma opcao: ");


if (opcao === 1) {


cadastrarprodutos();


} else if (opcao === 2) {


excluirprodutos();


} else if (opcao === 3) {


listarprodutos();


} else if (opcao === 0) {


console.log("Programa encerrado.");

conexao.end();


} else {


console.log("Opcao invalida.");

menu();

}

}



// Inicia o programa
menu();

