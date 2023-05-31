// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//    sequelize.define('User', {
      
      
//       email:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         isEmail:true        
//       },

//       password:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         is:/^(?=\w*\d)(?=\w*[a-z])\S{6,10}$/
//       }

//    }, { timestamps: false });
// };

'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class User extends Model {}
  User.init(
    {
      id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true
      },
      email:{
         type:DataTypes.STRING,
         allowNull:false,
         isEmail:true,
      },
      password:{
         type:DataTypes.STRING,
         allowNull:false,
         is:/^(?=\w*\d)(?=\w*[a-z])\S{6,10}$/
      },
      
    },
    {
      timestamps:false,
      sequelize,
      modelName: 'User',
    }
  );
 return User;
};
