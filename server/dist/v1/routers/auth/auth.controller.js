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
exports.AuthController = void 0;
const authService_1 = require("../../services/authService");
class AuthController {
    static registerController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, firstName, lastName, gender, password } = req.body;
            const avatar = `https://avatars.dicebear.com/api/${gender}/${username}.svg`;
            const Auth = new authService_1.AuthService({ username, firstName, lastName, gender, password, avatar }, null);
            const data = yield Auth.register();
            return data.error
                ? res.status(400).json({ error: true, detail: data.detail })
                : res.status(201).json({ error: false, detail: data.detail });
        });
    }
    ;
    static loginController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Auth = new authService_1.AuthService(null, req.body);
            const data = yield Auth.login();
            return data.error
                ? res.status(401).json({ error: true, detail: data.detail })
                : res.status(200).json({ error: false, detail: data.detail });
        });
    }
    ;
}
exports.AuthController = AuthController;
;
