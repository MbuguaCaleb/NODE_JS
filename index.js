const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log("Called  Listener", data));

logger.log("Hello World!");

//My Example-MbuguaCaleb

const LoggerTwo = require("./logger");

const loggerTwo = new LoggerTwo();

loggerTwo.on("message", data => console.log("Called  Listener", data));

loggerTwo.log("Hello World!");

//importing a class
/*
Not Yet Implemetned


import Person from "./person";

//console.log(__filename, __dirname);
//Module Wrappernode function
/*
(function(exports, require, module, __filename, __dirname) {
});
*/

//importing the person class from the file path
//instanciatig the class
/*
const Person = require("./person");

const person1 = new Person("Mbugua Caleb", 30);

person1.greeting();
*/
