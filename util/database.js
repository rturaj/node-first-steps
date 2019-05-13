const Sequelize = require("sequelize");

const sequelize = new Sequelize('webwizards_test', 'webwizards', 'test1234', { dialect: 'mysql', host: 'db4free.net' })


module.exports = sequelize;

