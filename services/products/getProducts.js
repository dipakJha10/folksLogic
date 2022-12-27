const router = require("express").Router();
const constants = require("../../utils/constants");
const httpStatus = require("http-status");
const db = require("../../models");
const product = db.product;

// Get API for products with pagination, default pagination set to 20 perpage

router.get("/products", async (req, res) => {
    try {
        let offset;
        let limit;
        if (req.query.pageNo && req.query.perPage) {
            req.query.perPage = parseInt(req.query.perPage);
            req.query.pageNo = parseInt(req.query.pageNo);
            offset = req.query.perPage * (req.query.pageNo - 1);
            limit = req.query.perPage;
        } else {
            offset = 0;
            limit = 20;
        }
        let data = await product.findAll({ offset: offset, limit: limit });
        res.status(200).json({
            status: httpStatus.OK,
            message: constants.constants.SUCCCESS_MSG,
            noOfProducts: data.length,
            result: data
        });
    } catch (exception) {
        res.status(500).send({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: constants.constants.FAILURE_MSG,
            exception: exception,
        });
    }
});

module.exports = router;