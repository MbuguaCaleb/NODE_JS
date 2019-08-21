const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  /*
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/api/users") {
    const users = [
      { name: "Bob Smith", age: 40 },
      { name: "Mercy Wanjiru", age: 39 }
    ];
    res.writeHead(200, { "Content-type": "application/json" });
    //turning the array from the database into JSON
    res.end(JSON.stringify(users));
  }
  */

  //Build file path

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  console.log(filePath);
  res.end();
});

const PORT = process.env.PORT || 5000;

//takes a call back
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
