var express = require('express');
var router = express.Router();
const Propietario = require('../models').propietario;
const Edificio = require('../models').edificio; 
//const Sequelize = require('sequelize');
const { Sequelize, Op} = require('sequelize');


router.get('/findAll/json', function(req, res, next) {  
    Propietario.findAll({  
        attributes: { exclude: ["updatedAt"] },
        include: [{  
            model: Edificio,  
            through: { attributes: [] }  
        }]  
    })  
    .then(propietarios => {  
        res.json(propietarios);  
    })  
    .catch(error => res.status(400).send(error)) 
});


router.get('/findAll/view', function(req, res, next) {
  Propietario.findAll({  
    attributes: { exclude: ["updatedAt"] },
    include: [{  
        model: Edificio,  
        through: { attributes: [] }  
    }]  
  }) 
  .then(porpietarios => {
    res.render('fotos', { title: 'Propietarios', arrPropietarios: porpietarios });
  })
  .catch(error => res.status(400).send(error));
});