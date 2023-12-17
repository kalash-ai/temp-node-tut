// const { log } = require('console')
const os = require('os')


// info about the current user
const user = os.userInfo()
console.log(user)

// method return the system uptime in seconds

console.log(`The system UPTIME is ${os.uptime} seconds`)

const currenos ={
    name : os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem()
}
console.log(currenos)