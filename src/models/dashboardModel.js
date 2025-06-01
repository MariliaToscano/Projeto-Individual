
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
        SELECT fkconquista, nome, imagem, descricao, DATE_FORMAT(dataHorario, '%d/%m/%Y %H:%i') as dataHorario
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
function platina(fkusuario) {
    var instrucaoSql = `
       SELECT CASE
            WHEN COUNT(status) = 63 THEN 'true'
            ELSE 'false'
            END AS platina
       FROM usuario_conquistas
       WHERE fkusuario = ${fkusuario} AND status = 1;
    `
    return database.executar(instrucaoSql);
}

function kpiMedia(fkusuario, platina) {

    if (platina == 'true') {
        var instrucaoSql = `
       SELECT ROUND(((TIMESTAMPDIFF(DAY,
                MIN(dataHorario),
                MAX(dataHorario))) / (COUNT(status))),2) 
                AS media
            FROM usuario_conquistas
            WHERE status = 1 AND fkusuario = ${fkusuario};

    `
    } else {
        var instrucaoSql = `
       SELECT ROUND(((TIMESTAMPDIFF(DAY, 
            MIN(dataHorario), 
            CURRENT_DATE)) / (COUNT(status))),2) 
            AS media
        FROM usuario_conquistas
        WHERE status = 1 AND fkusuario = ${fkusuario};

    `
    }

    return database.executar(instrucaoSql);
}

function kpiQTD(fkusuario, platina) {

    if (platina) {
      var instrucaoSql = `
       SELECT TIMESTAMPDIFF(DAY,
                MIN(dataHorario),
                MAX(dataHorario))
             AS diferenca
        FROM usuario_conquistas
        WHERE status = 1 AND fkusuario = ${fkusuario};
    `
    } else {
           var instrucaoSql = `
       SELECT TIMESTAMPDIFF(DAY,
                MIN(dataHorario),
                CURRENT_DATE)
             AS diferenca
        FROM usuario_conquistas
        WHERE status = 1 AND fkusuario = ${fkusuario};
    `
    }

    return database.executar(instrucaoSql);
}

module.exports = {
    contarStatus,
    ultimaConquistaBuscar,
    buscarUsername,
    graficoLinhaJogador,
    kpiMedia,
    platina,
    kpiQTD
};