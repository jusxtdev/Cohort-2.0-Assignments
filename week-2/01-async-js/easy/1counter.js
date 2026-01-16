function counter(start, end){
    console.log(start)
    let currentNum = start-1
        let interval = setInterval(() => {
            console.clear()
            if (currentNum === end) {
                clearInterval(interval)
            }else{
                console.log(currentNum)
                currentNum--
            }
        },1000)
}

counter(10, 0)