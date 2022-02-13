const { readFile } = require('fs')
const process = require('process')


readFile(process.argv, 'utf8', (err, res) => {
    if(err){
        err;
    }
    const data = res
    const lines = data.toString().split('\n').length
    console.log(lines);
})