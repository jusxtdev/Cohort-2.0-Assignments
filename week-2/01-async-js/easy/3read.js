const fs = require('fs')

function readtxtFile(){
    fs.readFile('3.txt', 'utf-8', function(err, data){
        console.log(data)
    })
}

readtxtFile()

let a = 0;
for (let i = 0; i < 1000; i++){
    a++
}
console.log(a)
