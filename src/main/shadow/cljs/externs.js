/**
 * these things are in cljs.core only they are only relevant to self-hosted
 * hopefully they will be moved out in the future
 *
 * @externs
 */

Error.prototype.number;
Error.prototype.columnNumber;

/**
 * @const
 */
var process;
process.hrtime;

/**
 * @const
 */
var global;

/** @const {string} */
var __filename;

/** @const {string} */
var __dirname;

/**
 * @param {string} name
 * @return {?}
 */
function require(name) {}
