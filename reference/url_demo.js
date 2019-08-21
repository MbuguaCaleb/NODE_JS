const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html/id= 100&status=active"
);

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host/Root Domain
console.log(myUrl.host);

//Host Name(does not get port)
console.log(myUrl.hostname);

//PathName
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Add Param
myUrl.searchParams.append("abc", "123");

let params;

params = new URLSearchParams("user=abc&query=xyz");
console.log(params.get("user"));
console.log(params.toString());
// Prints 'user=abc&query=xyz'

params = new URLSearchParams("?user=abc&query=xyz");
console.log(params.toString());

//Loop through params
//myUrl.searchParams.forEach(value, name) => {console.log(1)};
