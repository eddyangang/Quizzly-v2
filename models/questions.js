module.exports = function (sequelize, DataTypes) {
    var questions = sequelize.define("questions",
        {
            answer: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [1]
                }
            },
            question: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },

        });

    questions.associate = function (models) {
        questions.belongsTo(models.quizzes, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    questions.associate = (models) => {
        questions.belongsToMany(models.rooms, {
          through: 'roomQuestions',
          as: 'rooms',
          foreignKey: 'questionId'
        });
      };

    return questions;
};