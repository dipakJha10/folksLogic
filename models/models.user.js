module.exports = (sequelize, Sequelize) => {
    const UserData = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE, defaultValue: Sequelize.NOW
        }
    });
    return UserData;
};
