module.exports = (sequelize, Sequelize) => {
    const ProductsData = sequelize.define("products", {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        productName: {
            type: Sequelize.STRING
        },
        productDescription: {
            type: Sequelize.STRING
        },
        quantityPerUnit: {
            type: Sequelize.INTEGER
        },
        unitPrice: {
            type: Sequelize.INTEGER
        },
        minimumSellingRetailPrice: {
            type: Sequelize.INTEGER
        },
        discount: {
            type: Sequelize.INTEGER
        },
        unitInStock: {
            type: Sequelize.INTEGER
        },
        productAvailable: {
            type: Sequelize.INTEGER
        },
        updatedBy: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE, defaultValue: Sequelize.NOW
        }
    });
    return ProductsData;
};
