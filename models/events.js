module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('Events', {
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

  events.associate = (models) => {
    events.belongsTo(models.Actors);
    events.hasOne(models.Repos);
  };
  return events;
};
