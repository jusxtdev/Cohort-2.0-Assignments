const fs = require('fs')

function getFiles(folder){
  return new Promise((resolve) => {
    fs.readdir(folder, (err, files) => {
        if (err) throw err
        resolve(files)
    })
  })
}
async function printFiles(){
    let files = await getFiles('./files')
    console.log(files)
}
printFiles()