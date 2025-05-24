var database = require ("../database/config")

function marcarFalse(fkconquista, fkusuario){
    var instrucaoSql = `
    UPDATE usuario_conquistas SET status = 0 WHERE fkusuario = '${fkusuario}' AND fkconquista = '${fkconquista}';
    `
    return database.executar(instrucaoSql);
}

function marcarTrue(fkconquista, fkusuario){
    var instrucaoSql = `
    UPDATE usuario_conquistas SET status = 1 WHERE fkusuario = '${fkusuario}' AND fkconquista = '${fkconquista}';
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    marcarFalse,
    marcarTrue
};