import axios from 'axios';
import { updateProfileObj } from '../interfaces/user.interface';

export class User {
  static async getUserInfo(token: string): Promise<any> {
    return await axios
                    .get('/users/me', {
                          headers: {
                            'Authorization': 'Bearer ' + token
                          }})
                    .catch(error => Promise.reject(error.response.data));
  };

  static async updateUserInfo(token: string, payload: updateProfileObj): Promise<any> {
    return await axios
                    .put('/users/me', {payload, token})
                    .catch(error => Promise.reject(error.response.data));
  };

  static async getUsers(token: string): Promise<any>  {
    return await axios
                    .get('/users/all', {
                          headers: {
                            'Authorization': 'Bearer ' + token
                          }})
                    .catch(error => Promise.reject(error.response.data));
  }
};