"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = exports.loginSchema = exports.registerSchema = void 0;
const registerSchema = {
    type: "object",
    properties: {
        username: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        gender: { type: "string" },
        password: { type: "string" },
        avatar: { type: "string" }
    },
    required: ["username", "firstName", "lastName", "gender", "password"],
    additionalProperties: false
};
exports.registerSchema = registerSchema;
const loginSchema = {
    type: "object",
    properties: {
        username: { type: "string" },
        password: { type: "string" }
    },
    required: ["username", "password"],
    additionalProperties: false
};
exports.loginSchema = loginSchema;
const messageSchema = {
    type: "object",
    properties: {
        user: { type: "string" },
        peer: { type: "boolean", nullable: true },
        messages: { type: "array" },
    },
    required: ["user", "peer", "messages"],
    additionalProperties: false
};
exports.messageSchema = messageSchema;
