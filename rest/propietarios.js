var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Propietario = require('../models').propietario;
const Edificio = require('../models').edificio;

router.get('/findAll/json',
    function(req, res, next) {
    Propietario.findAll({
    
    attributes: { exclude:
    ["updatedAt", "createdAt"] } ,
    include: [{
    model: Edificio,
    through: {attributes: []}
    }],
    })
    .then(propietarios => {
    res.json(propietarios);
    })
    .catch(error =>
    res.status(400).send(error))
    });