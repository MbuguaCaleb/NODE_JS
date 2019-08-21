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


const Person = require("./person");

const person1 = new Person("Mbugua Caleb", 30);

person1.greeting();
