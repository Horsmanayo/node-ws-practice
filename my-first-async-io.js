const { readFile, read } = require('fs')
const process = require('process')


readFile(process.argv[2], (err, result) => {
    if(err){
        err;
    }
    const lines = (result.toString().split('\n').length) -1

    console.log(lines);
})