module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users",
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    len: [1]
                }
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            }
        });

        users.associate = function (models) {
            users.hasMany(models.quizzes, {
            });
        };

    return users;
};