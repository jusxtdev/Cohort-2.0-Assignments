const fs = require('fs')

function readTxt(){
    return new Promise(function(resolve, reject){
        let content = '';
        fs.readFile('./medium/1test.txt', 'utf-8', function(err,data){
            if (err){
                return reject(err);
            }
            let content = data
            resolve(content)
        })
    })
}

function removeSpaces(content){
    let processed = content.replace(/\s+/g, ' ').trim()
    return processed

}

function writeTxt(data){
    fs.writeFile('./medium/1test.txt', data, (err) => {if(err) console.log(err)})
}


async function main(){
    let content = await readTxt()
    let processedContent = removeSpaces(content)
    writeTxt(processedContent)
}

main()