"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const utils_1 = require("../../utils");
const users_controller_1 = require("./users.controller");
const UserRouter = (0, express_1.Router)();
exports.UserRouter = UserRouter;
UserRouter.get('/me', (0, utils_1.errorHandler)(users_controller_1.userController.getUserInfoController));
