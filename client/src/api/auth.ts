import axios, { AxiosResponse } from 'axios';
import { LoginObj, RegisterObj } from '../interfaces/auth.interface';

export class Auth {

  static async login(payload: LoginObj): Promise<any> {
    return await axios
                  .post('/auth/login', payload)
                  .then((res: AxiosResponse) => {
                    axios.defaults.headers.common["Authorization"] = 'Bearer ' + res.data.detail
                    return res
                  }) // set token
                  .catch(error => Promise.reject(error.response.data));
  };

  static async register(payload: RegisterObj): Promise<any> {
    return await axios
                  .post('auth/register', payload)
                  .catch(error => Promise.reject(error.response.data));
                 
  };
};