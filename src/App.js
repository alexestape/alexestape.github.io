// App.js
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import GridComponent from "./GridComponent";
import LightBulbButton from "./LightBulbButton";

const ThemedApp = () => {
  const { isDarkMode } = useTheme();

  const appStyles = {
    backgroundColor: isDarkMode ? "#171717" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    height: "100vh",
    padding: "20px",
  };

  const titleStyles = {
    fontFamily: "'Lato', sans-serif",
    fontWeight: "lighter",
    fontSize: "72px",
    padding: "0px",
    margin: "0px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  return (
    <div style={appStyles}>
      <div style={titleStyles}>
        Alexandre Estapé
        <LightBulbButton />
      </div>

      <GridComponent text="Name of the grid" />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;
