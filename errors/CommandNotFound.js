// @uthor: Elnur Alimirzayev

const err_msg = 'Command Not Found';

class CommandNotFound extends Error {
    setup() {
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
    constructor(message) {
        if (message) {
            super(err_msg + ': ' + message);
        } else {
            super(err_msg);
        }
        this.setup();
    }
}

module.exports = CommandNotFound;
