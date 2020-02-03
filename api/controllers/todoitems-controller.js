/**
 * Controller for ToDoItems endpoints.
 */

"use strict";
//import toDoItems service.
const toDoItemsService = require("../services/todoitems-service");
/**
 * Returns a list of todoitems in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function(request, response) {
  const resolve = todoitems => {
    response.status(200);
    response.json(todoitems);
  };

  if (Object.keys(request.query).length == 0) {
    toDoItemsService
      .getAll()
      .then(resolve)
      .catch(renderErrorResponse(response));
  } else {
    let searchToDoContent = request.query["searchText"];
    let checkAllBool = request.query["checkAll"];
    if (searchToDoContent != undefined) {
      toDoItemsService
        .search(searchToDoContent)
        .then(resolve)
        .catch(renderErrorResponse(response));
    }
    if (checkAllBool != undefined) {
      toDoItemsService
        .checkAll(checkAllBool)
        .then(resolve)
        .catch(renderErrorResponse(response));
    }
  }
};
/**
 * Creates a new TodoItem with the request JSON and
 * returns list of todoitems JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function(request, response) {
  const newToDoItem = Object.assign({}, request.body);
  const resolve = todoitems => {
    response.status(200);
    response.json(todoitems);
  };
  toDoItemsService
    .save(newToDoItem)
    .then(resolve)
    .catch(renderErrorResponse(response));
};
/**
 *
 * Deletes the To Do Item by To Do Item Id
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.deleteToDoItem = function(request, response) {
  const resolve = todoitems => {
    response.status(200);
    response.json(todoitems);
  };
  toDoItemsService
    .deleteToDoItem(request.params.todoitemid)
    .then(resolve)
    .catch(renderErrorResponse(response));
};
/**
 *
 * returns the todoitem by To Do Item Id
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getByToDoItemId = function(request, response) {
  const resolve = todoitems => {
    response.status(200);
    response.json(todoitems);
  };
  toDoItemsService
    .getByToDoItemId(request.params.todoitemid)
    .then(resolve)
    .catch(renderErrorResponse(response));
};
/**
 *
 * update ToDo Item by item id
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.updateToDoItem = function(request, response) {
  const toDoItem = Object.assign({}, request.body);
  const resolve = todoitems => {
    response.status(200);
    response.json(todoitems);
  };
  toDoItem._id = request.params.todoitemid;
  toDoItemsService
    .updateToDoItem(toDoItem)
    .then(resolve)
    .catch(renderErrorResponse(response));
};

/**
 * Function to delete all documents in collection
 */
exports.delete = function(request, response) {
  const resolve = todoitems => {
    response.status(200);
    response.json(todoitems);
  };
  const promiseDelete = toDoItemsService.delete();
  promiseDelete.then(resolve).catch(renderErrorResponse(response));
};
let renderErrorResponse = response => {
  const errorCallback = error => {
    if (error) {
      response.status(500);
      response.json({
        message: error.message
      });
    }
  };
  return errorCallback;
};
