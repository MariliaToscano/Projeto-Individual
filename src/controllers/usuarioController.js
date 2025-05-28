var usuarioModel = require("../models/usuarioModel");

function cadastrar2(req, res) {
    var nome = req.body.nomeServer;
    var username = req.body.usernameServer;
    var email = req.body.email;
    var senha = req.body.senhaServer

    if (!nome) {
        res.status(400).send("O nome está indefinido!");
    } else if (!username) {
        res.status(400).send("O username está indefinido!");
    } else if (!email) {
        res.status(400).send("O email está indefinido!");
    } else if(!senha){
        res.status(400).send("A senha está indefinida!");
    }else{
        usuarioModel.cadastrar2(nome, username, email, senha)
            .then(resultado => {
                res.json({ idUsuario: resultado.insertId });
            })
            .catch(erro => {
                console.error("Erro ao cadastrar idusuário", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarIdUsuario(req, res) {
    const email = req.params.email;

    usuarioModel.buscarIdUsuarioPorEmail(email)
        .then(resultado => {
            if (resultado.length === 0) {
                res.status(404).send("Email não encontrado!");
            } else {
                res.json(resultado[0]);
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar idusuario:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {

    var idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        res.status(400).send("Campos obrigatórios não foram preenchidos!");
    } else {
        usuarioModel.cadastrar(idUsuario)
            .then(resultadoCadastro => {
                res.json({ idUsuario: resultadoCadastro.insertId });
            })
            .catch(erro => {
                console.error("Erro ao cadastrar usuário:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function autenticar(req, res) {
    
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
   

     if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                               console.log(resultadoAutenticar);

                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        nome: resultadoAutenticar[0].nome,
                                        username: resultadoAutenticar[0].username,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                    });
    
    
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    cadastrar2,
    buscarIdUsuario,
    autenticar
}