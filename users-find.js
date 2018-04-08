'use strict';
const util = require('util');
const restify = require('restify');
const serverURL = 'https://obscure-waters-88720.herokuapp.com';

if(process.env.ENV==='DEV'){
    serverURL = 'https://localhost:' + process.env.PORT;
}

var client = restify.createJsonClient({
    url: serverURL,
    version: '*'
});

client.basicAuth('them', 'D4ED43C0-8BD6-4FE2-B358-7C0E230D11EF');

console.log('/find/'+ process.argv[2]);

client.get('/find/' + process.argv[2],
    (err, req, res, obj) => {
        if (err) console.error(err.stack);
        else console.log('Found ' + util.inspect(obj));
    });