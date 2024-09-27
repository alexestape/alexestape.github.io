// App.js
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import GridComponent from "./GridComponent";
import LightBulbButton from "./LightBulbButton";

const ThemedApp = () => {
  const { isDarkMode } = useTheme();

  const appStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    height: "100vh",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div style={appStyles}>
      <h1>Alexandre Estapé Carnicer</h1>
      <LightBulbButton />
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
