//config/auth.js


const auth = require('basic-auth'); 
const Credentials = require('../models/schema').Person



module.exports = function (request, response, next) 
{ 

    let user = auth(request);
    let pass = Buffer.from(user.pass).toString('base64')

    Credentials.findOne({n: user.name,password: pass})
                .then((person)=>{
                    if (person.name===null) Promise.reject;

                    response.set('WWW-Authenticate', 'Basic realm="example"');
                    return next()
                })
                .catch((err)=>{response.sendStatus(401);})    
 };
