var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');

let landing =require('../controllers/landing');

/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);

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
