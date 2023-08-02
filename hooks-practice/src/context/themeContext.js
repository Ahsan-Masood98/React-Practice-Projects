import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
