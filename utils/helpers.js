const Handlebars = require('handlebars');
const ifEquals = require('./hbHelper.js');

Handlebars.registerHelper('ifEquals', ifEquals);