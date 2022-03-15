import { Request, Response } from "express";

import { UserService } from '../../services/userService';

class userController {
  static async getUserInfoController(req: Request, res: Response) {
    const token: string = req.headers.authorization?.split(' ')[1]!;
    if (!token) return res.status(403).json({error: true, detail: 'unauthorized!'});

    const User = new UserService(token);
    const data = await User.getUserInfo();
    return data.error
                    ? res.status(500).json({error: true, detail: data.detail})
                    : res.status(200).json({error: false, detail: data.detail});
  };

  static async patchUserInfoController(req: Request, res: Response) {
    const {payload, token} = req.body;
    
    if (!token) return res.status(401).json({error: true, detail: 'unauthorized!'});
    if (!payload) return res.status(403).json({error:true, detail: 'forbidden'});
   
   
    const User = new UserService(token, payload);
    const data = await User.patchUserInfo();
    return data.error
                    ? res.status(500).json({error: true, detail: data.detail})
                    : res.status(200).json({error: false, detail: data.detail});
  };

  static async getAllUsersController(req: Request, res: Response) {
    const token: string = req.headers.authorization?.split(' ')[1]!;
    if (!token) return res.status(401).json({error: true, detail: 'unauthorized!'});

    const User = new UserService(token);
    const data = await User.getAllUsers()
    return data.error
                    ? res.status(500).json({error: true, detail: data.detail})
                    : res.status(200).json({error: false, detail: data.detail});
  }
};

export { userController };