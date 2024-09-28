import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { colors } from "./assets/color_styles";

const GridComponent = ({ text, data }) => {
  const { isDarkMode } = useTheme();

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div style={styles.grid}>
      <div style={styles.title}>{text}</div>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.gridItem,
            ...(index === data.length - 1 ? styles.lastGridItem : {}),
            ...(item.textColor !== "white"
              ? {
                  color: item.textColor,
                  borderColor: isDarkMode ? "white" : "black",
                }
              : {}),
          }}
        >
          {item.name}
          <HoverButton
            color={item.buttonColor}
            onClick={() => handleButtonClick(item.link)}
          />
        </div>
      ))}
    </div>
  );
};

const HoverButton = ({ color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();
  const { unhoverColor, hoverColorDark, hoverColorLight } = colors[color];
  return (
    <button
      style={{
        ...styles.button,
        backgroundColor: isHovered
          ? isDarkMode
            ? hoverColorDark
            : hoverColorLight
          : unhoverColor, // Use the hover color when hovered
      }} // put the styles in an object so that we only need to put the color in the line -> seems reasonable to me
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    ></button>
  );
};

const styles = {
  grid: {
    display: "block",
    width: "310px",
    padding: "30px",
  },
  lastGridItem: {
    borderBottom: "1px solid",
  },
  title: {
    display: "inline-block",
    border: "1px solid",
    padding: "5px",
    marginRight: "0px",
    borderBottom: "0px",
  },
  gridItem: {
    border: "1px solid",
    borderBottom: "0px",
    padding: "5px",
  },
  button: {
    height: "20px",
    width: "20px",
    float: "right",
    borderRadius: "5px",
    border: "0px",
    cursor: "pointer",
  },
};

export default GridComponent;
