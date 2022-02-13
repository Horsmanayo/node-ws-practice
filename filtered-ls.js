const {readdir} = require('fs')
const path = require('path');

readdir(process.argv[2],(err, result) =>{
    if(err){
        console.log(err);
    }
    result.forEach(file => {
        if(path.extname(file) === '.' + process.argv[3]){
            console.log(file);
        }
    })
})