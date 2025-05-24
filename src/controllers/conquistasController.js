var conquistaModel = require("../models/conquistaModel");

function marcarFalse(req, res){
    console.log("Requisição recebida:", req.params);

    var fkconquista = req.params.fkconquista
    var fkusuario = req.params.fkusuario

    conquistaModel.marcarFalse(fkconquista, fkusuario)
        .then(resultado => {
            res.json(resultado)
        })
}

function marcarTrue(req, res){
    console.log("Requisição recebida:", req.params);

    var fkconquista = req.params.fkconquista
    var fkusuario = req.params.fkusuario

    conquistaModel.marcarTrue(fkconquista, fkusuario)
        .then(resultado => {
            res.json(resultado)
        })
}

module.exports = {
    marcarFalse,
    marcarTrue
};