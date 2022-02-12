"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCatcher = void 0;
const logger_1 = require("../logger");
function errorCatcher(err, req, res, next) {
    logger_1.logger.error(err.message);
    return res.status(500).json({ error: true, detail: err.message });
}
exports.errorCatcher = errorCatcher;
