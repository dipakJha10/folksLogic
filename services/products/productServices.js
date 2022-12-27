const router = require("express").Router();
const constants = require("../../utils/constants");
const httpStatus = require("http-status");
const db = require("../../models");
const product = db.product;

// post api for adding products 

router.post("/products", async (req, res) => {
    try {
        req.body.createdBy = constants.parseJwt(req.token).email;
        req.body.updatedBy = constants.parseJwt(req.token).email;
        let productRes = await product.create(req.body)
        res.status(200).json({
            status: httpStatus.OK,
            message: constants.constants.SUCCCESS_MSG,
            data: productRes
        });
    } catch (exception) {
        console.log(exception)
        res.status(500).send({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: constants.constants.FAILURE_MSG,
            exception: exception,
        });
    }
});

router.put("/products", async (req, res) => {
    try {
        req.body.updatedBy = constants.parseJwt(req.token).email;
        let updatedProduct = await product.update(req.body, { where: { id: req.body.id } })
        res.status(200).json({
            status: httpStatus.OK,
            message: constants.constants.SUCCCESS_MSG,
            data: updatedProduct
        });
    } catch (exception) {
        res.status(500).send({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: constants.constants.FAILURE_MSG,
            exception: exception,
        });
    }
});

router.delete("/products", async (req, res) => {
    try {
        let deletedProduct = await product.destroy({ where: { id: req.body.id } });
        res.status(200).json({
            status: httpStatus.OK,
            message: constants.constants.SUCCCESS_MSG,

        });
    } catch (exception) {
        console.log(exception)
        res.status(500).send({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: constants.constants.FAILURE_MSG,
            exception: exception,
        });
    }
});

module.exports = router;