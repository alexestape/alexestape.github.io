import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

const GridComponent = ({ text }) => {
  const data = [
    {
      name: "Google",
      link: "https://www.google.com",
      color: "orange",
      hoverColorLight: "black",
      hoverColorDark: "white",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com",
      color: "lightgreen",
      hoverColorLight: "#e91e63",
      hoverColorDark: "#e91e63",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com",
      color: "lightcoral",
      hoverColorLight: "red",
      hoverColorDark: "#e91e63",
    },
  ];

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };
  // can we get here the Darkmode constant? idk
  return (
    <div style={styles.grid}>
      <div style={styles.title}>{text}</div>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.gridItem,
            ...(index === data.length - 1 ? styles.lastGridItem : {}),
          }}
        >
          {item.name}
          <HoverButton
            color={item.color}
            hoverColorDark={item.hoverColorDark} // Pass the hover color
            hoverColorLight={item.hoverColorLight} // Pass the hover color
            onClick={() => handleButtonClick(item.link)}
          />
        </div>
      ))}
    </div>
  );
};

const HoverButton = ({ color, hoverColorDark, hoverColorLight, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <button
      style={{
        ...styles.button,
        backgroundColor: isHovered
          ? isDarkMode
            ? hoverColorDark
            : hoverColorLight
          : color, // Use the hover color when hovered
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
