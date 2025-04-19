/**
 * 
 * @param {string} message 
 * @returns {{
 *  status: boolean,
 *  message: string,
 *  data: null
 * }}
 */
function errorResponse(message) {
  return {
    status: false,
    message: message,
    data: null,
  }
}

/** 
 * @template T
 * @param {T} data
 * @return {{
 *  status: boolean,
 *  message: string,
 *  data: T
 * }}
*/
function successResponse(data) {
  return {
    status: true,
    message: "Success",
    data: data,
  }
}

module.exports = {
  errorResponse,
  successResponse,
}