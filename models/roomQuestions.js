module.exports = function (sequelize, DataTypes) {
    const roomQuestions = sequelize.define('roomQuestions', {
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'rooms',
          key: 'id'
        }
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'questions',
          key: 'id'
        }
      }
    });
    return roomQuestions;
  };