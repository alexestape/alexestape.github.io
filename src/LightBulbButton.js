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
        width: "50px", // Adjust size as needed
        cursor: "pointer",
        //filter: isDarkMode ? "invert(100%)" : "none", // Optional: change image color for dark mode
      }}
    />
  );
};

export default LightBulbButton;
