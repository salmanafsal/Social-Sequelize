
const {Sequelize, Model, DataTypes, db} = require('.././db/connection');



// TODO - define the Band model

class Post extends Model {}

// Initialize the Band model
Post.init(
  {
    // Define the properties
    title: {
      type: DataTypes.STRING, // Define name as a string
      allowNull: false,       // Name cannot be null
    },
    body: {
      type: DataTypes.STRING, // Define genre as a string
      allowNull: false,       // Genre cannot be null
    },
    createdAt: {
        type: DataTypes.STRING, // Define genre as a string
        allowNull: false,       // Genre cannot be null
      },


  },
  {
    sequelize: db,          // Pass the database connection
    modelName: 'Post',      // Define the model name as "Band"
  }
);



module.exports = Post

