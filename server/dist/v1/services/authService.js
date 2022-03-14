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
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ajv_1 = __importDefault(require("ajv"));
const user_model_1 = require("../models/user.model");
const schemaValidator_1 = require("../schemaValidator");
const logger_1 = require("../logger");
class AuthService {
    constructor(registerObj, loginObject) {
        this.userInfo = registerObj;
        this.loginInfo = loginObject;
        this.ajv = new ajv_1.default();
    }
    ;
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            const { valid, detail } = this.validator(this.userInfo, schemaValidator_1.registerSchema);
            if (valid) {
                // check if usernale already exists 
                const { username } = this.userInfo;
                const user = yield user_model_1.UserModel.findOne({ username: username });
                if (user) {
                    return { error: true, detail: "This username already exists!" };
                }
                ;
                // hash password
                const hash = yield bcrypt_1.default.hash(this.userInfo.password, 10);
                this.userInfo.password = hash;
                // save doc
                const userDoc = new user_model_1.UserModel(this.userInfo);
                userDoc.save();
                // exclude password
                const _a = this.userInfo, { password } = _a, data = __rest(_a, ["password"]);
                return { error: false, detail: data };
            }
            ;
            logger_1.logger.error(detail);
            return { error: true, detail };
        });
    }
    ;
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const { valid, detail } = this.validator(this.loginInfo, schemaValidator_1.loginSchema);
            if (valid) {
                // check if username exists
                const { username, password } = this.loginInfo;
                const user = yield user_model_1.UserModel.findOne({ username: username });
                if (user) {
                    const { _id, username, firstName, lastName, gender, avatar } = user;
                    // check passwords matches
                    const match = yield bcrypt_1.default.compare(password, user.password);
                    if (match) {
                        const token = jsonwebtoken_1.default.sign({ _id, username, firstName, lastName, gender, avatar }, process.env.SECRET_KEY);
                        return { error: false, detail: token };
                    }
                    return { error: true, detail: "Invalid password" };
                }
                return { error: true, detail: "This username doesn't exists" };
            }
            ;
            logger_1.logger.error(detail);
            return { error: true, detail };
        });
    }
    ;
    validator(data, schema) {
        const validate = this.ajv.compile(schema);
        return validate(data) ? { valid: true } : { valid: false, detail: validate.errors };
    }
    ;
}
exports.AuthService = AuthService;
;
