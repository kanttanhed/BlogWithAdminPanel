const Sequelize = require("sequelize");

const connection = new Sequelize('blogWithPanelAdmin','plinio','12345678',{
    host: 'localhost',
    dialect: 'mysql',
  
});

module.exports = connection;