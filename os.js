const os = require('os')


// User Info

const user = os.userInfo();
console.log(os.uptime())

// returns system uptime

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()

}

console.log(currentOS)