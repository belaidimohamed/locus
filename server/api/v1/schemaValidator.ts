const registerSchema = {
  type: "object",
  properties: {
    username: {type: "string"},
    firstName: {type: "string"},
    lastName: {type: "string"},
    gender: {type: "string"},
    password: {type: "string"},
    avatar: {type: "string"}
  },
  required: ["username", "firstName", "lastName", "gender", "password"],
  additionalProperties: false
};

const loginSchema = {
  type: "object",
  properties: {
    username: {type: "string"},
    password: {type: "string"}
  },
  required: ["username", "password"],
  additionalProperties: false
};

const userInfoSchema = {
  type: "object",
  properties: {
    firstName: {type: "string"},
    lastName: {type: "string"},
    gender: {type: "string"},
    age: {type: "number", nullable: true},
    bio: {type: "string", nullable: true},
    location: {type: "string", nullable: true},
  },
  required: ["firstName", "lastName", "gender"],
  additionalProperties: false
}

const messageSchema = {
  type: "object",
  properties: {
    user: {type: "string"},
    peer: {type: "boolean", nullable: true},
    messages: {type: "array"},
  },
  required: ["user", "peer", "messages"],
  additionalProperties: false
};

export { registerSchema, loginSchema, userInfoSchema, messageSchema };