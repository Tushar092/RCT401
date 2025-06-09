import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [Theme, setTheme] = useState("light");

  let changeTheme = () => {
    if (Theme === "light") {
      setTheme("dark");
    } else if (Theme === "dark") {
      setTheme("light");
    }
    document.body.className = "";
    document.body.classList.add(Theme);
  };

  return (
    <ThemeContext.Provider value={{ Theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
