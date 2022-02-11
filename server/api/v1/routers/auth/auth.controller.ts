import { Request, Response } from "express";

import { AuthService } from "../../services/authService";

class AuthController {

  static async registerController(req: Request, res: Response) {
    const { username, firstName, lastName, gender, password } = req.body;
    const avatar = `https://avatars.dicebear.com/api/${gender}/${username}.svg`;
    
    const Auth = new AuthService({ username, firstName, lastName, gender, password ,avatar }, null);
    const data = await Auth.register()
    return data.error
                    ? res.status(400).json({error: true, detail: data.detail})
                    : res.status(201).json({error: false, detail: data.detail});
    
  };

  static async loginController(req: Request, res: Response) {
    const Auth = new AuthService(null, req.body);
    const data = await Auth.login();
    return data.error
                    ? res.status(401).json({error: true, detail: data.detail})
                    : res.status(200).json({error: false, detail: data.detail});
  };
};

export { AuthController };