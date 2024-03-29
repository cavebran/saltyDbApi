import express from "express-promise-router";
import fightsController = require("../controllers/fights");
import loginController = require("../controllers/login");

const router = express();

router.post('/fights', loginController.verifyJWT,fightsController.insertFight);

export {router};
