import { Router } from "express";

import { errorHandler } from "../../utils";

import { userController } from "./users.controller";

const UserRouter = Router();

UserRouter.get('/all', errorHandler(userController.getAllUsersController));
UserRouter.get('/me', errorHandler(userController.getUserInfoController));
UserRouter.put('/me', errorHandler(userController.patchUserInfoController));

export { UserRouter };