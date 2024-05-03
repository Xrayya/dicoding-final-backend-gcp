import * as handlers from "./handlers/index.js";

/**
 * @type {HapiRoute[]}
 */
const routes = [
  {
    method: "POST",
    path: "/books",
    handler: handlers.addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: handlers.getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: handlers.getBookById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: handlers.changeBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: handlers.deleteBookById,
  },
];

export default routes;
