module.exports = (sequelize, DataTypes) => {
  const repos = sequelize.define('Repos', {
    id: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  repos.associate = (models) => {
    repos.belongsTo(models.Actors);
    repos.belongsTo(models.Events);
  };
  return repos;
};
