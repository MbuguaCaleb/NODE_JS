//information about our evironment and Os

const os = require("os");

//platform

console.log(os.platform());

//CPU Architecture

console.log(os.arch());

//CPU Core  Info
console.log(os.cpus());

//Free Memory

console.log(os.freemem());

//Total Memory
console.log(os.totalmem());

//Home dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());
