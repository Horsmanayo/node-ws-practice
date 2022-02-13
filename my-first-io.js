const {readFileSync} = require('fs')
const process = require('process')


const data = readFileSync(process.argv[2])

const lines = (data.toString().split('\n').length) -1

console.log(lines);