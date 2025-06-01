
var database = require("../database/config")


function contarStatus(fkusuario) {
    var instrucaoSql = `
        SELECT
            SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS concluido,
            SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) AS naoConcluido
        FROM usuario_conquistas
        WHERE fkusuario = '${fkusuario}';
    `
    return database.executar(instrucaoSql);
}
function ultimaConquistaBuscar(fkusuario) {
    var instrucaoSql = `
        SELECT fkconquista, nome, imagem, DATE_FORMAT(dataHorario, '%d/%m/%Y %H:%i') as dataHorario
        FROM usuario_conquistas 
        INNER JOIN conquistas ON conquistas.id = usuario_conquistas.fkconquista
        WHERE fkusuario = '${fkusuario}' AND dataHorario = (
            SELECT MAX(dataHorario)
            FROM usuario_conquistas
            WHERE fkusuario = '${fkusuario}');
    `
    return database.executar(instrucaoSql);
}
function buscarUsername(fkusuario) {
    var instrucaoSql = `
       SELECT username FROM usuario WHERE idUsuario = '${fkusuario}'
    `
    return database.executar(instrucaoSql);
}
function graficoLinhaJogador(fkusuario) {
    var instrucaoSql = `
            SELECT DATE(dataHorario) AS dia, COUNT(*) AS contagem
            FROM usuario_conquistas
            WHERE status = 1 AND fkusuario = ${fkusuario}
            GROUP BY DATE(dataHorario)
            ORDER BY DATE(dataHorario);
    `
    return database.executar(instrucaoSql);
}
function kpiMedia(fkusuario) {
    var instrucaoSql = `
       SELECT username FROM usuario WHERE idUsuario = '${fkusuario}'
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    contarStatus,
    ultimaConquistaBuscar,
    buscarUsername,
    graficoLinhaJogador,
    kpiMedia
};