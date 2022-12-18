const mongoose = require("mongoose")

const student = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    topics: [{
        _id: false,
        topic: {
            type: String,
            required: true,
        },
        summery: {
            type: String,
            required: true,
            trim: true
        }
    }]
}, { timestamps: true })

module.exports = mongoose.model('student', student)