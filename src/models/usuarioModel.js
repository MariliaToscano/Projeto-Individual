var database = require("../database/config")


function cadastrar2(nome, username, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, username, email, senha) 
        VALUES ('${nome}', '${username}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdUsuarioPorEmail(email) {
    var instrucao = `
        select idUsuario from usuario where email = '${email}';
    `;
    return database.executar(instrucao);
}




function cadastrar(idUsuario) {
    const vetorInsert = []
    for (var i = 1; i <= 63; i++) {
        var instrucaoSql = `
        INSERT INTO usuario_conquistas (fkusuario, fkconquista) 
        VALUES ('${idUsuario}', '${i}');`;

        vetorInsert.push(database.executar(instrucaoSql))
    }
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return Promise.all(vetorInsert) ;
    
    
}

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nome, username, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar2,
    buscarIdUsuarioPorEmail,
    cadastrar,
    autenticar

};