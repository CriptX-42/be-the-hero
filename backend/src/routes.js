const express = require('express');

const OngController = require('./controllers/OngsController');
const Incidentontroller = require('./controllers/IncidentController');

const routes = express.Router();

//* Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//* Incidents
routes.post('/incidents', Incidentontroller.create);

module.exports = routes;
