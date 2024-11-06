const Comment = require("./Comment.js");
const Like = require("./Like.js");
const Post = require("./Post.js");
const Profile = require("./Profile.js");
const User = require("./User.js");

User.hasOne(Profile)
Profile.belongsTo(User)


User.hasMany(Post)
Post.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.belongsToMany(Like, {through: "userlike"})
Like.belongsToMany(User, {through: "userlike"})




module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}