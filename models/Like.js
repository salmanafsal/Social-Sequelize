
const {Sequelize, Model, DataTypes, db} = require('.././db/connection');



// TODO - define the Band model

class Like extends Model {}

// Initialize the Band model
Like.init(
  {
    // Define the properties
    reactionType: {
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
    modelName: 'Like',      // Define the model name as "Band"
  }
);



module.exports = Like

