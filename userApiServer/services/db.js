const { Sequelize } = require('sequelize');
const env = require("../configs/config")
env.configenv



//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') 


const connectDB = async () => {
    const sequelize = new Sequelize(
        process.env.DB_DATABASE,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres'
        });

    try {
        await sequelize.authenticate();
        console.log('Connection has been POSTGRESQL successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    connectDB
}