const fs = require('fs');

function logReqRes(filename){
    return (req, res, next)=>{
        fs.appendFile(filename, `\n ${Date.now()}, ${req.method}, ${req.url}, ${req.ip}\n`, (err, data)=>{
            next()
        })
        }
}

module.exports = {
    logReqRes
}