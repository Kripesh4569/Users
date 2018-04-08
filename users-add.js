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

client.post('/create-user', {
    username: "me", password: "w0rd", provider: "local", lastName: "Einarrsdottir", givenName: "Ashildr", middleName: "", emails: [], photos: []
    },
    (err, req, res, obj) => {
        if (err) console.error(err.stack);
        else console.log('Created ' + util.inspect(obj));
    }
);