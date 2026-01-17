const { resolve } = require('path');
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printDate(format){
    setInterval(()=>{
        console.clear()
        let d = new Date()
        let toPrint = '';
        if (format === 1){
            toPrint = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        } else{
            toPrint = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
        }
        console.log(toPrint)
    },1000)
}

/*
24hr - HH:MM::SS (Eg. 13:45:23)

12hr - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

async function chooseFormat(){
    let choice = 0;
    while (true) {
        console.log('Choose one of the format ->')
        let userIn = await numInput()
        if (parseInt(userIn) !== 1 && parseInt(userIn) !== 2){
            console.log('Enter Valid Number')
        } else {
            rl.close()
            choice = userIn
            break;
        }
    }
    return choice;
}


function numInput(){
    return new Promise((resolve) => {
        rl.question('1 - 24hr format\n2 - 12hr format\n>>>', answer => {
            resolve(answer)
        })
    })
}

async function main(){
    let formatStr = await chooseFormat()
    let format = parseInt(formatStr)
    printDate(format)
}

main()