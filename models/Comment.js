
const {Sequelize, Model, DataTypes, db} = require('.././db/connection');



// TODO - define the Band model

class Comment extends Model {}

// Initialize the Band model
Comment.init(
  {
    // Define the properties
    body: {
      type: DataTypes.STRING, // Define name as a string
      allowNull: false,       // Name cannot be null
    },
    createdAt: {
      type: DataTypes.STRING, // Define genre as a string
      allowNull: false,       // Genre cannot be null
    },

  },
  {
    sequelize: db,          // Pass the database connection
    modelName: 'Comment',      // Define the model name as "Band"
  }
);



module.exports = Comment

