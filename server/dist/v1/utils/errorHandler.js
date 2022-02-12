"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(fn) {
    return (req, res, next) => Promise.resolve(fn(req, res, next))
        .catch(next);
}
exports.errorHandler = errorHandler;
;
