import { ObjectId, HydratedDocument } from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Ajv from "ajv";

import { UserModel } from "../models/user.model";
import { User } from "../interfaces/user.interface";
import { registerSchema, loginSchema } from "../schemaValidator";
import { logger } from "../logger";

export class AuthService {
  private userInfo;
  private loginInfo;

  private ajv;

  constructor(
    registerObj: User<ObjectId> | null, 
    loginObject: {username: string, password: string} | null
    ) { 
    this.userInfo = registerObj;
    this.loginInfo = loginObject;

    this.ajv = new Ajv();
  };

  async register() {
    const { valid, detail } = this.validator(this.userInfo!, registerSchema);
    if (valid) {
      // check if usernale already exists 
      const { username } = this.userInfo!;
      const user = await UserModel.findOne({username: username});
      if (user) {
        return { error: true, detail: "This username already exists!" };
      };
      // hash password
      const hash = await bcrypt.hash(this.userInfo!.password, 10);
      this.userInfo!.password = hash;
      // save doc
      const userDoc: HydratedDocument<User<ObjectId>> = new UserModel(this.userInfo);
      userDoc.save();
      // exclude password
      const { password, ...data } = this.userInfo!;
      return { error: false, detail: data };
    }; 
    logger.error(detail);
    return { error: true, detail };
  };

  async login() {
    const { valid, detail } = this.validator(this.loginInfo!, loginSchema);
    if (valid) {
      // check if username exists
      const { username, password } = this.loginInfo!;
      const user = await UserModel.findOne({username: username});
      if (user) {
        const { _id, username, firstName, lastName, gender, avatar } = user;
        // check passwords matches
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = jwt.sign({ _id, username, firstName, lastName, gender, avatar }, process.env.SECRET_KEY!);
          return { error: false, detail: token };
        } return { error: true, detail: "Invalid password" };
      } return { error: true, detail: "This username doesn't exists" };
    };
    logger.error(detail);
    return { error: true, detail };
  };

  validator(data: object, schema: object) {
    const validate = this.ajv.compile(schema);
    return validate(data) ? {valid: true} : {valid: false, detail: validate.errors};
  };
};