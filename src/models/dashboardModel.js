var database = require ("../database/config")


function contarStatus( fkusuario){
    var instrucaoSql = `
        SELECT
            SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS concluido,
            SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) AS naoConcluido
        FROM usuario_conquistas
        WHERE fkusuario = '${fkusuario}';
    `
    return database.executar(instrucaoSql);
}



module.exports = {
  contarStatus
};