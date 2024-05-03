import books from "../books.js";

/** @type {HapiRouteHandler} */
export const deleteBookById = (request, h) => {
  const { bookId } = /** @type {DeleteBookByIdHandlerParams} */ (
    request.params
  );

  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    return h
      .response({
        status: "fail",
        message: "Buku gagal dihapus. Id tidak ditemukan",
      })
      .code(404);
  }

  books.splice(index, 1);

  return h
    .response({
      status: "success",
      message: "Buku berhasil dihapus",
    })
    .code(200);
};
