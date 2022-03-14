import { createContext } from "react";

export interface userInfoType {
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  gender: string;
  iat: number;
}

export interface UserType {
  userInfo: object | null;
  setUserInfo: Function;
};

export const UserContext = createContext<UserType>({userInfo: null, setUserInfo: () => {}});
