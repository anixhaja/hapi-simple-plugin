
'use strict';

// Load modules

// const Boom = require('boom');
const Code = require('code');
const Lab = require('lab');


// Test shortcuts

const lab = exports.lab = Lab.script();
const it = lab.it;
const expect = Code.expect;

it('tests OK', (done) => {

    expect('1').to.equal('1');
    done();
});
