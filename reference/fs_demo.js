const fs = require("fs");
const path = require("path");

/*
//Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
  if (err) throw err;

  console.log("Folder created ....");
});

*/

//Arrow Fuction

/*

fs.mkdir(path.join(__dirname, "/testtwo"), {}, err=> {
    if (err) throw err;
  
    console.log("Folder created ....");
  });

*/

//open and write file

//create and write to file

/*
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  err => {
    if (err) throw err;

    console.log("File written to....");
  }
);

fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "I Love nodeJS",
  err => {
    if (err) throw err;

    console.log("File written to....");
  }
);

*/

//Introducing a callback
/*
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  err => {
    if (err) throw err;

    console.log("File written to....");

    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "I Love nodeJS-MbuguaCaleb",
      err => {
        if (err) throw err;

        console.log("File written to....");
      }
    );
  }
);
*/

//ReadFile

//ReadFile
/*

fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

*/

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  err => {
    if (err) throw err;

    console.log("File Renamed");
  }
);
