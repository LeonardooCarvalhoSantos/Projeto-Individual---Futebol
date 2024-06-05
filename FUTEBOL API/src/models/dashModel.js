var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT 
    score as score, (SELECT AVG(score) FROM Quizz) media
                    FROM Quizz
                    WHERE fkUsuario = ${idUsuario}
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}
