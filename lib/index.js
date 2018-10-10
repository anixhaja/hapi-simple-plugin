
'use strict';

exports.register = function (server, options, next) {

    console.log('Plugin loaded successfully');
    next();
};

exports.register.attributes = {

    pkg: require('../package.json')
};
