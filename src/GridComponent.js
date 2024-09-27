import React, { useState } from "react";

const GridComponent = ({ text }) => {
  const data = [
    {
      name: "Google",
      link: "https://www.google.com",
      color: "orange",
      hoverColor: "#ffcc00",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com",
      color: "lightgreen",
      hoverColor: "#4CAF50",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com",
      color: "lightcoral",
      hoverColor: "#e91e63",
    },
  ];

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
          }}
        >
          {item.name}
          <HoverButton
            color={item.color}
            hoverColor={item.hoverColor} // Pass the hover color
            onClick={() => handleButtonClick(item.link)}
          />
        </div>
      ))}
    </div>
  );
};

const HoverButton = ({ color, hoverColor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        ...styles.button,
        backgroundColor: isHovered ? hoverColor : color, // Use the hover color when hovered
      }}
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
