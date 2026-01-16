const fs = require('fs')


function writeTofile(data){
    fs.writeFile('4.txt', data, 'utf8', function(err){
        console.log('writing')
        return
    })
}

function something(){
    let a = 0;
    for (let i = 0; i < 1000000 ; i++){
        a++
    }
    console.log(a)
}

something()
writeTofile('Hello from node')
something()