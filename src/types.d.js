/**
 * @typedef {object} Book
 * @prop {string} id
 * @prop {string} name
 * @prop {number} year
 * @prop {string} author
 * @prop {string} summary
 * @prop {string} publisher
 * @prop {number} pageCount
 * @prop {number} readPage
 * @prop {boolean} finished
 * @prop {boolean} reading
 * @prop {string} insertedAt
 * @prop {string} updatedAt
 */

/**
 * @typedef {import("@hapi/hapi").ServerRoute<import("@hapi/hapi").ReqRefDefaults>} HapiRoute
 */

/**
 * @typedef {import("@hapi/hapi").ServerRoute<import("@hapi/hapi").ReqRefDefaults>["handler"]} HapiRouteHandler
 */

/**
 * @typedef {object} AddBookHandlerPayload
 * @prop {string} name
 * @prop {number} year
 * @prop {string} author
 * @prop {string} summary
 * @prop {string} publisher
 * @prop {number} pageCount
 * @prop {number} readPage
 * @prop {boolean} reading
 */

/** @typedef {object} GetBookByIdHandlerParams
 * @prop {string} bookId
 */

/**
 * @typedef {GetBookByIdHandlerParams} ChangeBookByIdHandlerParams
 */

/**
 * @typedef {GetBookByIdHandlerParams} DeleteBookByIdHandlerParams
 */

/**
 * @typedef {AddBookHandlerPayload} ChangeBookByIdHandlerPayload
 */

/**
 * @typedef {object} GetAllBookHandlerQueryParams
 * @prop {string | undefined} name
 * @prop {string | undefined} reading
 * @prop {string | undefined} finished
 */
