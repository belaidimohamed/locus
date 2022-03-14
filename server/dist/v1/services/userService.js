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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const tryToCatch_1 = require("../utils/tryToCatch");
const logger_1 = require("../logger");
class UserService {
    getUserInfo(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = yield jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
            const [error, data] = yield (0, tryToCatch_1.tryToCatch)(((id) => user_model_1.UserModel.findById(id).lean()), _id);
            if (error) {
                logger_1.logger.error(error);
                return { error: true, detail: error };
            }
            ;
            const { __v, password, isAdmin } = data, detail = __rest(data, ["__v", "password", "isAdmin"]);
            return { error: false, detail };
        });
    }
    ;
}
exports.UserService = UserService;
;
