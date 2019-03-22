var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');

let landing =require('../controllers/landing');

/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
//router.get('/leads', landing.showLeads);
router.get('/leads', landing.showLeads);
router.get('/lead/:leadId', landing.showLead);
router.get('/lead/:leadId/edit', landing.showEditLead);
router.post('/lead/:leadId/edit', landing.editLead);
router.post('/lead/:leadId/delete', landing.deleteLead);



// const sequelize = new Sequelize('mariadb://gulistan:12345@localhost:3306/express-mvp-db');
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = router;
