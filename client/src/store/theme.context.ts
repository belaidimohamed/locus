import { createContext } from "react";

export type ThemeType = {
  type: string;
  color: string;
  navBackground: string
  backgroundColor: string;
  setTheme: Function;
};

export const themes = {
  light: {
    type: 'light',
    color: '#353b48',
    navBackground: '#dee2ef',
    backgroundColor: '#f5f6fa',
    setTheme: (): void => {},
  },
  dark: {
    type: 'dark',
    color: '#f5f6fa',
    navBackground: '#272b34',
    backgroundColor: '#353b48',
    setTheme: (): void => {},
  },
};


export const ThemeContext = createContext<ThemeType>(themes.light); // default value

