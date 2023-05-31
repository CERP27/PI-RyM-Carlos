// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//    sequelize.define('Favorite', {
//       id:{
//          type:DataTypes.INTEGER,
//          allowNull:false,
//          primaryKey:true
//       },
//       name:{
//          type:DataTypes.STRING,
//          allowNull:false,         
//       },
//       status:{
//          type:DataTypes.ENUM,
//          values:['Alive','Dead','unknown'],
//          allowNull:false
//       },
//       species:{
//          type:DataTypes.STRING,
//          allowNull:false
//       },
//       gender:{
//          type:DataTypes.ENUM,
//          values:['Female','Male','Genderless','unknown'],
//          allowNull:false
//       },
//       origin:{
//          type:DataTypes.STRING,
//          allowNull:false
//       },
//       image:{
//          type:DataTypes.STRING,
//          allowNull:false
//       }
//    }, { timestamps: false });
// };

'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Favorite extends Model {
    static associate(models) {}
  }
  Favorite.init(
    {
      id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true
      },
      name:{
         type:DataTypes.STRING,
         allowNull:false,         
      },
      status:{
         type:DataTypes.ENUM,
         values:['Alive','Dead','unknown'],
         allowNull:false
      },
      species:{
         type:DataTypes.STRING,
         allowNull:false
      },
      gender:{
         type:DataTypes.ENUM,
         values:['Female','Male','Genderless','unknown'],
         allowNull:false
      },
      origin:{
         type:DataTypes.STRING,
         allowNull:false
      },
      image:{
         type:DataTypes.STRING,
         allowNull:false
      }
    },
    {
      timestamps:false,
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
