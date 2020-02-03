/**
 * Service for ToDoItems operations.
 */

"use strict";
const mongoose = require("mongoose"),
  ToDoItems = mongoose.model("todoitems");

/**
 * Returns all the todoitems.
 *
 * @param {Object} params {Search parameters}
 */
exports.getAll = function() {
  const promise = ToDoItems.find({}).exec();
  return promise;
};
/**
 * Returns the todoitems based on the searched text
 */
exports.search = function(searchToDoContent) {
  const promise = ToDoItems.find({
    $text: { $search: searchToDoContent }
  }).exec();
  return promise;
};
/**
 * Saves and returns the new toDoItem object.
 *
 * @param {Object} sticky {Sticky object}
 */
exports.save = function(task) {
  const newTask = new ToDoItems(task);
  const promise = newTask.save();
  return promise;
};
/**
 * Deletes all documents in the collection
 */
exports.delete = function() {
  return ToDoItems.remove();
};
/**
 * Returns the todoItem by ToDoItem Id
 */
exports.getByToDoItemId = function(todoitemId) {
  return ToDoItems.findById(todoitemId).exec();
};
/**
 * Update the todoitem by ToDoItem Id
 */
exports.updateToDoItem = function(toDoItem) {
  toDoItem.modifiedDate = new Date();
  const promise = ToDoItems.findOneAndUpdate(
    { _id: toDoItem._id },
    toDoItem
  ).exec();
  return promise;
};
/**
 * Delete the todoitem by ToDoItem Id
 */
exports.deleteToDoItem = function(toDoItemId) {
  const promise = ToDoItems.remove({ _id: toDoItemId });
  return promise;
};
/**
 * Toggle Check all the todoitems
 */
exports.checkAll = function(checkAll) {
  const promise = ToDoItems.updateMany(
    {},
    { $set: { completed: checkAll, modifiedDate: new Date() } }
  );
  return promise;
};
