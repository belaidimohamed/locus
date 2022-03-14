import { createContext } from "react";

export interface TokenType {
  token: string | null;
  setToken: Function;
};

export const TokenContext = createContext<TokenType>({token: null, setToken: () => {}});

