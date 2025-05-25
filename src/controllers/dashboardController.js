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

module.exports = {
    contarStatus
};