const parseArgs = require('minimist');

const argv = process.argv.slice(2);

const options = {
    default: {
        modo: 'prod',
        puerto: 0,
        debug: false,
    },
    alias: {
        'm': 'modo',
        'p': 'puerto',
        'd': 'debug',
        _: 'otros'
    }
}

const parsed = parseArgs(argv, options)
delete parsed.m;
delete parsed.p;
delete parsed.d;
parsed.otros = parsed['_'];
delete parsed['_'];

console.log(parsed);