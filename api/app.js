"use strict";
module.exports = function(app) {
  //Initialize models
  require("./models/todoitem");

  //Initialize routes
  let todoitemsRoutes = require("./routes/todoitems-route");
  todoitemsRoutes(app);
};
