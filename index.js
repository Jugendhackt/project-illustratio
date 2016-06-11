var express = require("express");
var shodan = require("./shodan");
shodan.settings = {
  key: "I0eJHqlXu2cAwx99XA8LgKcgf6VvhOrt"
}
var app = express();

app.use("/app", express.static("app"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/app/index.html");
});

app.get("/api/:city", function(req, res){
  // shodanrequest
  shodan.search(req, function(){
    
  });
  res.send(req.params.city);
});

app.listen(3000)  // start our app on port 3000
