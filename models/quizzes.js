module.exports = function (sequelize, DataTypes) {
    var quizzes = sequelize.define("quizzes",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [1]
                }
            }
        });

    quizzes.associate = function (models) {
        quizzes.hasMany(models.questions, {
            onDelete: "cascade"
        });
    };

    quizzes.associate = function (models) {
        quizzes.belongsTo(models.users, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return quizzes;
};