import React from "react";
import { useTheme } from "./ThemeContext";
import srcLightbulb from "../assets/images/lightbulb.jpg";

const DarkModeComponent = () => {
  const { toggleTheme } = useTheme();

  return (
    <img
      src={srcLightbulb}
      onClick={toggleTheme}
      alt={""}
      style={{
        width: "24px",
      }}
    />
  );
};

export default DarkModeComponent;
