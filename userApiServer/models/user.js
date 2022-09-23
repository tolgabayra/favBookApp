const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres::memory');

const User = sequelize.define('User',{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    }
})

console.log(User === sequelize.models.User); // true

