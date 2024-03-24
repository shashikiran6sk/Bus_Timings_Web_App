const express = require('express');

const router = express.Router();

const { Timings } = require("../db");


router.get("/bus", async (req, res) => {
    
    const source = req.query.source || "";
    const destination = req.query.destination||"";

    const timings = await Timings.find({
        $and: [{
            Source: {
                "$regex": source
            }
        }, {
            Destination: {
                "$regex": destination
            }
        }]
    })
    let count=1;
    res.json({
        timings: timings.map(timings => ({
            id:count++,
            Source:timings.Source,
            Source_Time:timings.Source_Time,
            Depature:timings.Destination,
            Depature_Time:timings.Destination_Time
        }))
    })
})

module.exports = router;