import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [Theme, setTheme] = useState("lightTheme");

  let changeTheme = () => {
    let themes = {
      lightTheme: "#FFFFFF",
      darkTheme: "#242424",
    };

    Theme == "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");

    document.body.backgroundColor = themes.Theme;
  };
  return (
    <ThemeContext.Provider value={{ Theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
