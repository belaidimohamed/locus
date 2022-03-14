"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: false },
    bio: { type: String, required: false },
    avatar: { type: String, required: false },
    location: { type: String, required: false },
    friends: { type: Array, required: false },
    notifications: { type: Array, required: false },
    blockedBy: { type: Array, required: false },
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
