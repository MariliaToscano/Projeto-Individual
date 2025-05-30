var dashboardModel = require("../models/dashboardModel");

function contarStatus(req, res){
    const fkusuario = req.params.fkusuario

    dashboardModel.contarStatus(fkusuario)
    .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("Erro ao contar status:", erro);
            res.status(500).send("Erro ao contar status.");
        });
}

function ultimaConquistaBuscar(req, res){
    const fkusuario = req.params.fkusuario

    dashboardModel.ultimaConquistaBuscar(fkusuario)
    .then(resultado => {
        res.json(resultado);
    })
    .catch(erro => {
         console.error("Erro ao buscar ultima conquista:", erro);
            res.status(500).send("Erro ao buscar ultima conquista.");
    })
}
function buscarUsername(req, res){
    const fkusuario = req.params.fkusuario

    dashboardModel.buscarUsername(fkusuario)
    .then(resultado => {
        res.json(resultado);
    })
    .catch(erro => {
         console.error("Erro ao buscar username:", erro);
            res.status(500).send("Erro ao buscar username.");
    })
}


module.exports = {
    contarStatus,
    ultimaConquistaBuscar,
    buscarUsername
};