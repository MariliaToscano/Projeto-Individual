var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar2", function (req, res) {
    usuarioController.cadastrar2(req, res);
});

router.get("/buscar-id-usuario/:email", function (req, res) {
    usuarioController.buscarIdUsuario(req, res);
});


router.post("/cadastrar/:idUsuario", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res){
    usuarioController.autenticar(req, res);
})

module.exports = router;