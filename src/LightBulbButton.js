// LightBulbButton.js
import React from "react";
import { useTheme } from "./ThemeContext";
import lightbulbImage from "./assets/lightbulb.jpg"; // Ensure you have this image in your assets

const LightBulbButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <img
      src={lightbulbImage}
      alt={isDarkMode ? "Turn Off" : "Turn On"}
      onClick={toggleTheme}
      style={{
        width: "25px",
        marginLeft: "20px",
      }}
    />
  );
};

export default LightBulbButton;
