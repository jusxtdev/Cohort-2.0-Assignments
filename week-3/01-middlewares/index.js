


let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

function watchReq(){
    userId = 1
    if (userId in numberOfRequestsForUser){
        numberOfRequestsForUser.userId = numberOfRequestsForUser.userId + 1
    } else {
        numberOfRequestsForUser.userId = 1
    }
    console.log('Request Count ' + numberOfRequestsForUser.userId)
}

function blockReq(){
    userId = 1
    const currentUserReqCount = numberOfRequestsForUser.currentUserId

    if (currentUserReqCount >= 5){
        console.log('Limit exceeded, Try again later')
        return
    }
    console.log('Accepted')
}

function sendReq(){
    watchReq()
    blockReq()
}

setTimeout(sendReq,1)
setTimeout(sendReq,1)
setTimeout(sendReq,1)
setTimeout(sendReq,1)