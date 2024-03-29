import Jwt  from "jsonwebtoken";
import Ajv from "ajv";
import { ObjectId } from "mongoose";

import { UserModel } from "../models/user.model";
import { tryToCatch } from "../utils/tryToCatch";
import { User } from "../interfaces/user.interface";
import { logger } from "../logger";
import { userInfoSchema } from "../schemaValidator";

export class UserService {
  private patchData;
  private token;

  private ajv;

  constructor(token: string, patchData?: User<ObjectId>) {
    this.patchData = patchData;
    this.token = token;

    this.ajv = new Ajv();
  }

  async getIdFromToken() {
    return await Jwt.verify(this.token, process.env.SECRET_KEY!);
  };

  async getUserInfo() {
    const {_id}: any = await this.getIdFromToken();
    
    const [error, data] = await tryToCatch(((id: string) => UserModel.findById(id).lean()), _id);
    if (error) {
      logger.error(error);
      return {error: true, detail: error};
    };
    const {__v, password, isAdmin, ...detail} = data;
    return {error: false, detail};
  };

  async patchUserInfo() {
    const { valid, detail } = this.validator(this.patchData!, userInfoSchema);
    if (valid) {
      const {_id}: any = await Jwt.verify(this.token, process.env.SECRET_KEY!);
      const [error, data] = await tryToCatch(((id: string) => UserModel.findOneAndUpdate({_id}, this.patchData, {new: true}).lean()), _id);
      if (error) {
        logger.error(error);
        return {error: true, detail: error};
      };
      const {__v, password, isAdmin, ...detail} = data;
      return {error: false, detail};
    }; 
    return {error: true, detail};
  };

  async getAllUsers() {
    const {_id}: any = await this.getIdFromToken();
    
    const data = await UserModel.find().lean();
    if (data.length === 0) return {error: true, detail: 'There is no users for now!'};
    const users: Array<object> = [];
    data.forEach(user => {      
      if (_id !== user._id.toString()) {
        const {password, isAdmin, friends, blockedBy, ...detail} = user;
        users.push(detail);
      };
    });
    return {error: false, detail: users};
  };

  validator(data: object, schema: object) {
    const validate = this.ajv.compile(schema);
    return validate(data) ? {valid: true} : {valid: false, detail: validate.errors};
  };
}; 