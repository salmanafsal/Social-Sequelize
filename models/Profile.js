
const {Sequelize, Model, DataTypes, db} = require('.././db/connection');



// TODO - define the Band model

class Profile extends Model {}

// Initialize the Band model
Profile.init(
  {
    // Define the properties
    bio: {
      type: DataTypes.STRING, // Define name as a string
      allowNull: false,       // Name cannot be null
    },
    profilePicture: {
      type: DataTypes.STRING, // Define genre as a string
      allowNull: false,       // Genre cannot be null
    },
    birthday: {
        type: DataTypes.STRING, // Define genre as a string
        allowNull: false,       // Genre cannot be null
      },


  },
  {
    sequelize: db,          // Pass the database connection
    modelName: 'Profile',      // Define the model name as "Band"
  }
);



module.exports =  Profile

