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
  "Hello World!I have been able to call events in Node JS-Caleb Mbugua Karanja Kerei Ngugi",
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

//const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log("Called  Listener", data));

logger.log("Hello World!");

//My Example-MbuguaCaleb

//const LoggerTwo = require("./logger");

const loggerTwo = new LoggerTwo();

loggerTwo.on("message", data => console.log("Called  Listener", data));

loggerTwo.log("Hello World!");
