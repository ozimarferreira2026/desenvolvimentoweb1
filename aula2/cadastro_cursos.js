const mysql = require("mysql2")

const conexao =mysql.createConnection({
host:"localhost",
user:"root",
password :"root",
database :"cursos"
});
// Dados que serão cadastrados
const cursos = [
['Desenvolvimento de sistemas', 1200],
['Informática', 800],
['Administração', 1000]
    
    
];
const insert = "INSERT INTO cursos(nome, carga_horaria) VALUES ?";

//envia os dados para mysql
    conexao.query(insert, [cursos], function(erro) {
     if(erro) {
        console.log("Erro ao cadastrar cursos.");
        console.log(erro);
    }else {
        console.log("cursos cadastrado com sucesso!");
    }
    
});   
 
        // ID dos cursos que será excluido
const id = 3;

const deletar = "DELETE FROM  cursos WHERE id = ?";

conexao.query(deletar, [id], function (erro, resultado) {

    if (erro) {
        console.log("Erro ao excluir cursos.");
        console.log(erro);
    } else if (resultado.affectedRows === 0) {
        console.log("cursos não encontrado.");
    } else {
        console.log("cursos excluido!");
    }
    conexao.end();

});