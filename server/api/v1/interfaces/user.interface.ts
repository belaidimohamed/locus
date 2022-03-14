export interface User<T> {
  username: string;
  isAdmin?: boolean;
  firstName: string;
  lastName: string;
  gender: string;
  password: string;
  age?: number,
  bio?: string;
  avatar?: string;
  location?: string;
  friends?: Array<T>;
  notifications?: Array<object>;
  blocks?: Array<T>;
  blockedBy?: Array<T>;
};