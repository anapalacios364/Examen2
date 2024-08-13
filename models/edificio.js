'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.edificio.belongsToMany(models.propietario, { through:'edificios', foreignKey: "id_propietario" } );
      }
  }
  edificio.init({
    id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    numpisos: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    avaluo: DataTypes.FLOAT,
    id_propietarios: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'edificio',
    tableName: 'edificios',
  });
  return edificio;
};