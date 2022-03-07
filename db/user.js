// @uthor: Elnur Alimirzayev

const mongoose = require('mongoose');

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

module.exports = new mongoose.Schema({
    discord_id: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    salutes: {
        type: [{
            file_location: String
        }],
        default: undefined
    },
    wait_for_audio: {
        type: Boolean,
        default: false
    }
}, schemaOptions)
