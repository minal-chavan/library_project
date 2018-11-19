'use strict';


class Logger {

    constructor(name) {
        this.name = name;
    }

    log(msg) {
        console.log(this.name + ' ' + msg);
    }

    info(desc) {
        this.log('info: ' + desc);
    }

    debug(desc) {
        this.log('debug: ' + desc);
    }

    verbose(desc) {
        this.log('verbose: ' + desc);
    }

    error(desc) {
        console.error('error: ' + desc);
    }


};


module.exports = Logger;
