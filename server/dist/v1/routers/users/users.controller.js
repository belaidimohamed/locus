"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../../services/userService");
class userController {
    static getUserInfoController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const User = new userService_1.UserService();
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            const data = yield User.getUserInfo(token);
            return data.error
                ? res.status(500).json({ error: true, detail: data.detail })
                : res.status(200).json({ error: false, detail: data.detail });
        });
    }
    ;
}
exports.userController = userController;
;
