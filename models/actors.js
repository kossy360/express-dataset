module.exports = (sequelize, DataTypes) => {
  const actors = sequelize.define('Actors', {
    id: {
      type: DataTypes.UUID,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  actors.associate = (models) => {
    actors.hasMany(models.Repos);
    actors.hasMany(models.Events);
  };
  return actors;
};
