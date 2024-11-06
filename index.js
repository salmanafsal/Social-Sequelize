const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
const {Sequelize, Model, DataTypes, db} = require('./db/connection.js')



module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}