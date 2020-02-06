let express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
//mongodb://localhost:27017/local
mongoose.connect("mongodb://heroku_hhrr7tj9:bmm8rdplhmbdq6hvqbjjpqf4i5@ds061751.mlab.com:61751/heroku_hhrr7tj9", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

//Enabling CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Initialize app
let initApp = require("./api/app");
initApp(app);

app.listen(port);
console.log("ToDo RESTful API server started on: " + port);
