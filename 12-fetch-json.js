let HTTP = require("q-io/http");

HTTP.read("http://localhost:1337")
  .then(json => JSON.parse(json))
  .then(console.log);
