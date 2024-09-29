import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { buttonColors } from "../data/buttonColor";
import { GridButton } from "./styles";

export const HoverButton = ({ color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();
  const buttonColorsByTheme = buttonColors[color];

  return (
    <GridButton
      isHovered={isHovered}
      isDarkMode={isDarkMode}
      colors={buttonColorsByTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    />
  );
};
