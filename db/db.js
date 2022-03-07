// @uthor: Elnur Alimirzayev

const mongoose = require('mongoose');

class DB {
    constructor(uri) {
        this.uri = uri;
        return mongoose.connect(this.uri, {})
    }
}

module.exports = DB;
