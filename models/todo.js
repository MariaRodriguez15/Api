module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  });
  return Todo;
};
