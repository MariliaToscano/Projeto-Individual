var conquistaModel = require("../models/conquistaModel");

function marcarFalse(req, res) {
    console.log("Requisição recebida:", req.params);

    var fkconquista = req.params.fkconquista
    var fkusuario = req.params.fkusuario

    conquistaModel.marcarFalse(fkconquista, fkusuario)
        .then(resultado => {
            res.json(resultado)
        })
}

function marcarTrue(req, res) {
    console.log("Requisição recebida:", req.params);

    var fkconquista = req.params.fkconquista
    var fkusuario = req.params.fkusuario

    conquistaModel.marcarTrue(fkconquista, fkusuario)
        .then(resultado => {
            res.json(resultado)
        })
}

function buscarStatus(req, res) {
    const fkusuario = req.params.fkusuario

    conquistaModel.buscarStatus(fkusuario)
        .then(resultado => {

            res.json(resultado);
        })
        .catch(erro => {
            console.error("Erro ao buscar status:", erro);
            res.status(500).send("Erro ao buscar status.");
        });

}

module.exports = {
    marcarFalse,
    marcarTrue,
    buscarStatus
};