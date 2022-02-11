import { Schema, model } from "mongoose";
import { Message } from "../interfaces/message.interface";

const messageSchama = new Schema<Message<Schema.Types.ObjectId>>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  peer: { type: Schema.Types.ObjectId, ref: "User" },
  messages: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" }, 
      dateSended: {type: Date, default: Date.now},
      message: String 
    }]
});

export const message = model('Messages', messageSchama);