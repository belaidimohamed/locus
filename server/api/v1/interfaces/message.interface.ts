export interface Message<T> {
  user: T;
  peer: T;
  messages: Array<object>
};