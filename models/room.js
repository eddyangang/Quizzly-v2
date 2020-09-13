module.exports = function (sequelize, DataTypes) {
    var rooms = sequelize.define("rooms",
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            },
            host: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            }
        });

        rooms.associate = (models) => {
            rooms.belongsToMany(models.questions, {
              through: 'roomQuestions',
              as: 'questions',
              foreignKey: 'roomId'
            });
          };

    return rooms;
};