const mongoose = require('mongoose');

mongoose.connect("Database instance")


const timingSchema = new mongoose.Schema({
    SNO: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    Route: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    Source: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    Source_Time: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    Destination: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    Destination_Time: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }

});


const Timings = mongoose.model('BUS_timings', timingSchema);

module.exports = {
	Timings
};