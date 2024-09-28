// App.js
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import GridComponent from "./GridComponent";
import LightBulbButton from "./LightBulbButton";
import { data } from "./assets/data";
import image from "./assets/githublogo.svg";
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
        <a href="https://github.com/alexestape" target="_blank">
          <img src={image} />
        </a>
        <a href="https://github.com/alexestape" target="_blank">
          <img src={image} />
        </a>
        <LightBulbButton />
      </div>
      <GridComponent text="Name of the grid" data={data} />
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
