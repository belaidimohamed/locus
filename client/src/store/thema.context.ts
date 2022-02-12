import { createContext } from "react";

type ThemeType = {
  color: string;
  background: string;
};

const themes = {
  light: {
    color: '#353b48',
    background: '#f5f6fa',
  },
  dark: {
    color: '#f5f6fa',
    background: '#353b48',
  },
};

const ThemeContext = createContext<ThemeType>(themes.light); // default value

export { themes, ThemeContext };