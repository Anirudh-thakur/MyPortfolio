import { createContext } from "react";

export const themes = {
  dark: "",
  light: "white-content",
};

const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});

export default ThemeContext