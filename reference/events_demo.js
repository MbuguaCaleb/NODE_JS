const EventEmmiter = require("events");

//Create Emmitter Class

class MyEmmitter extends EventEmmiter {}

//Init Object

const myEmmitter = new MyEmmitter();

//Event listener
myEmmitter.on("event", () => console.log("Event Fired!"));

//init Event
myEmmitter.emit("event");

/*

//Event Listener
myEmmitter.on("event", () => {
  console.log("Event fired");
});

myEmmitter.on("event", function() {
  console.log("Event Fired!");
});

*/
