const router = require("express").Router();
const constants = require("../../utils/constants");
const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const db = require("../../models");
const User = db.user;
const authService = require('../../utils/authService')

router.post("/register", async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        User.create(req.body).then((result) => {
            res.status(200).json({
                status: httpStatus.OK,
                message: constants.constants.SUCCCESS_MSG
            });
        }).catch(err => {
            res.status(200).json({
                status: httpStatus.OK,
                message: constants.constants.FAILURE_MSG,
                error: err
            });
        })
    } catch (exception) {
        console.log(exception)
        res.status(500).send({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: constants.constants.FAILURE_MSG,
            exception: exception,
        });
    }
});


router.post("/login", async (req, res) => {
    try {
        let where = { email: req.body.email };
        let query = {
            where: where
        }

        let result = await User.findAll(query);
        if (result.length > 0) {
            if (await bcrypt.compare(req.body.password, result[0].password)) {

                let token = await authService.signIn({ fullname: result[0].fullName, email: result[0].email })
                res.status(200).json({
                    status: httpStatus.OK,
                    message: constants.constants.SUCCCESS_MSG,
                    user: {
                        name: result[0].fullName,
                        bearer_token: token                       
                    }
                });
            } else {
                res.status(200).json({
                    status: httpStatus.OK,
                    message: constants.constants.FAILURE_MSG,
                    info: "User password does not match"
                });
            }
        } else {
            res.status(200).json({
                status: httpStatus.OK,
                message: constants.constants.FAILURE_MSG,
                info: "user does not exist"
            });
        }
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