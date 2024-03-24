// backend/user/index.js
const express = require('express');
const userRouter = require("./Timings");


const router = express.Router();

router.use("/Timings", userRouter);


module.exports = router;