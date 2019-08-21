const EventEmmiter = require("events");

const path = require("path");
const uuid = require("uuid");
const fs = require("fs");

class Logger extends EventEmmiter {
  log(msg) {
    //Call Event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

let writefile = fs.writeFile(
  path.join(__dirname, "reference/test", "helloWorld.txt"),
  "Hello World!I have been able to call events in Node JS-Caleb Mbugua Karanja",
  err => {
    if (err) throw err;

    console.log("File written to....");
  }
);

class LoggerTwo extends EventEmmiter {
  log(msg) {
    //Call Event
    this.emit("message", { writefile, msg });
  }
}

module.exports = LoggerTwo;
