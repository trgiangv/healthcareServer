const { Sequelize } = require('sequelize');

const database = 'giangvu';
const username = 'root';
const password = null;

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;