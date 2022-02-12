"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const auth_router_1 = require("./routers/auth/auth.router");
const errorCatcher_1 = require("./middlewares/errorCatcher");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "..", "public")));
app.use('/api/v1/auth', auth_router_1.AuthRouter);
// app.use('/api/v1/users', )
// custom middleware
app.use(errorCatcher_1.errorCatcher);
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "public", "index.html"));
});
