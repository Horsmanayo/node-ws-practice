const process = require('process')

const arg = process.argv

// const sum = 0;
// for (let i = 2; i < arg.length; i++) {
//   sum += Number(arg[i]);
// }

// console.log(sum)

// console.log(arg);

var sum = 0;
for (var i = 2; i < process.argv.length; i++) {

  sum += Number(process.argv[i]);
}

console.log(sum)