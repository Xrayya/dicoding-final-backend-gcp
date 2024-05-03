import books from "../books.js";

/** @type {HapiRouteHandler} */
export const getAllBooks = (request, h) => {
  const { name, finished, reading } =
    /** @type {GetAllBookHandlerQueryParams} */ (request.query);

  return h
    .response({
      status: "success",
      data: {
        books: books
          .filter((book) =>
            name !== undefined
              ? book.name.toLowerCase().match(name?.toLowerCase())
              : true,
          )
          .filter((book) =>
            finished !== undefined
              ? (!book.finished && finished === "0") ||
                (book.finished && finished === "1")
              : true,
          )
          .filter((book) =>
            reading !== undefined
              ? (!book.reading && reading === "0") ||
                (book.reading && reading === "1")
              : true,
          )
          .map(({ id, name, publisher }) => {
            return {
              id,
              name,
              publisher,
            };
          }),
      },
    })
    .code(200);
};
