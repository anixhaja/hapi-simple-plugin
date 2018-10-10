
'use strict';

exports.plugin = {

    pkg: require('../package.json'),
    register: function (server) {

        console.log('Plugin loaded successfully');
    }
};
