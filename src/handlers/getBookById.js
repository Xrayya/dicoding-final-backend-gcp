import books from "../books.js";

/** @type {HapiRouteHandler} */
export const getBookById = (request, h) => {
  const { bookId } = /** @type {GetBookByIdHandlerParams} */ (request.params);

  const requestedBook = books.filter((book) => book.id === bookId)[0];

  if (requestedBook === undefined) {
    return h
      .response({
        status: "fail",
        message: "Buku tidak ditemukan",
      })
      .code(404);
  }

  return h
    .response({
      status: "success",
      data: {
        book: requestedBook,
      },
    })
    .code(200);
};
