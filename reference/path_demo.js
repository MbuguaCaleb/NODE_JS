const path = require("path");

//base file name

//return the whole path
console.log(__filename);
//returns only the basename
console.log(path.basename(__filename));

//Directory name
console.log(__dirname);
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//accessing properties of the object
console.log(path.parse(__filename).base);

//concatenate Paths
//../test/hello.html

console.log(path.join(__dirname, "test", "hello.html"));
