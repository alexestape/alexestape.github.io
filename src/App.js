import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import GridComponent from "./GridComponent";
import LightBulbButton from "./LightBulbButton";
import { data } from "./assets/data";
import ImageLink from "./imageComponent";
import { profiles } from "./assets/profiles";

const ThemedApp = () => {
  const { isDarkMode } = useTheme();

  const appStyles = {
    backgroundColor: isDarkMode ? "#171717" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    height: "100vh",
    padding: "20px",
  };

  const titleStyles = {
    display: "flex",
    alignItems: "flex-end",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "lighter",
    fontSize: "72px",
    paddingLeft: "20px",
  };

  return (
    <div style={appStyles}>
      <div style={titleStyles}>
        Alexandre Estapé
        <div style={{ marginLeft: "24px" }}>
          {Object.entries(profiles).map(([key, { src, link }]) => (
            <ImageLink key={key} src={src} link={link} />
          ))}
          <LightBulbButton />
        </div>
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
