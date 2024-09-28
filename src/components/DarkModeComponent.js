import React from "react";
import { useTheme } from "./ThemeContext";
import lightbulbImage from "../assets/lightbulb.jpg";

const DarkModeComponent = () => {
  const { toggleTheme } = useTheme();

  return (
    <img
      src={lightbulbImage}
      onClick={toggleTheme}
      alt={""}
      style={{
        width: "24px",
      }}
    />
  );
};

export default DarkModeComponent;
