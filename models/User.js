
const {Sequelize, Model, DataTypes, db} = require('.././db/connection');



// TODO - define the Band model

class User extends Model {}

// Initialize the Band model
User.init(
  {
    // Define the properties
    username: {
      type: DataTypes.STRING, // Define name as a string
      allowNull: false,       // Name cannot be null
    },
    email: {
      type: DataTypes.STRING, // Define genre as a string
      allowNull: false,       // Genre cannot be null
    },
  },
  {
    sequelize: db,          // Pass the database connection
    modelName: 'User',      // Define the model name as "Band"
  }
);



module.exports = User
