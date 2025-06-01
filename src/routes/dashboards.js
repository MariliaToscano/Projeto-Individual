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

router.get("/graficoLinhaJogador/:fkusuario", function (req, res){
    dashboardController.graficoLinhaJogador(req, res);  
});

router.get("/platina/:fkusuario", function (req, res){
    dashboardController.platina(req, res);  
});

router.get("/kpiMedia/:fkusuario/:platina", function (req, res){
    dashboardController.kpiMedia(req, res);  
});

router.get("/kpiQTD/:fkusuario/:platina", function (req, res){
    dashboardController.kpiQTD(req, res);  
});



module.exports = router;