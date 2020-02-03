/**
 * ToDoItems endpoint route definitions.
 */

"use strict";
module.exports = function(app) {
  const toDoItemsController = require("../controllers/todoitems-controller");
  // To Do Items Routes for create.
  app
    .route("/todoitems")
    .get(toDoItemsController.list)
    .post(toDoItemsController.post)
    .delete(toDoItemsController.delete);

  app
    .route("/todoitems/:todoitemid")
    .get(toDoItemsController.getByToDoItemId)
    .put(toDoItemsController.updateToDoItem)
    .delete(toDoItemsController.deleteToDoItem);

    //enable cors
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });
};
