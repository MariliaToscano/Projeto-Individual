var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


router.get("/contarStatus/:fkusuario", function (req, res){
    dashboardController.contarStatus(req, res);  
});

router.get("/ultimaConquistaBuscar/:fkusuario", function (req, res){
    dashboardController.ultimaConquistaBuscar(req, res);  
});

router.get("/buscarUsername/:fkusuario", function (req, res){
    dashboardController.buscarUsername(req, res);  
});
module.exports = router;