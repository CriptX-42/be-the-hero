const express = require('express');

const OngController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//* Sessions
routes.post('/sessions', SessionController.create);

//* Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//* Profile
routes.get('/profile', ProfileController.index);

//* Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
