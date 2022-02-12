"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const mongoose_1 = require("mongoose");
const messageSchama = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    peer: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    messages: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
            dateSended: { type: Date, default: Date.now },
            message: String
        }
    ]
});
exports.message = (0, mongoose_1.model)('Messages', messageSchama);
