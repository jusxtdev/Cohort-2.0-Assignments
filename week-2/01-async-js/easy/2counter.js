function countDown(currentNum){
    console.clear()
    console.log(currentNum)

    if (currentNum === 0){
        return
    }

    setTimeout(() => countDown(currentNum-1), 1000)
}
countDown(10)