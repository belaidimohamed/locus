import { Schema, model } from "mongoose";

import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User<Schema.Types.ObjectId>>({
  username: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true},
  avatar: {type: String, required: false},
  friends: {type: Array, required: false},
  notifications: {type: Array, required: false},
  blockedBy: {type: Array, required: false},
});

export const UserModel = model<User<Schema.Types.ObjectId>>('User', userSchema);
