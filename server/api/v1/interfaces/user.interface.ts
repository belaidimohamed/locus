export interface User<T> {
  username: string;
  isAdmin?: boolean;
  firstName: string;
  lastName: string;
  gender: string;
  password: string;
  avatar?: string;
  location?: string;
  friends?: Array<T>;
  notifications?: Array<object>;
  blockedBy?: Array<T>;
};