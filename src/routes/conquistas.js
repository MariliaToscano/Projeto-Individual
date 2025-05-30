var express = require("express");
var router = express.Router();

var conquistasController = require("../controllers/conquistasController");

router.put("/marcarFalse/:fkconquista/:fkusuario", function (req, res) {
    conquistasController.marcarFalse(req, res);
});

router.put("/marcarTrue/:fkconquista/:fkusuario", function (req, res){
    conquistasController.marcarTrue(req, res);  
});

router.get("/buscarStatus/:fkusuario", function (req, res){
    conquistasController.buscarStatus(req, res);  
});

module.exports = router;