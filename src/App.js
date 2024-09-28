import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import GridComponent from "./GridComponent";
import LightBulbButton from "./LightBulbButton";
import { allData } from "./assets/allData";
import ImageLink from "./imageComponent";
import { profiles } from "./assets/profiles";
import styled from "styled-components";

const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const appStyles = {
    backgroundColor: isDarkMode ? "#171717" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    height: "100vh",
    padding: "20px",
  };

  const styleButtonlvl1 = {
    padding: "10px 20px",
    marginRight: "10px",
    backgroundColor: isDarkMode ? "#404040" : "#d9d9d9",
    color: isDarkMode ? "white" : "black",
    border: "none",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Lato",
  };

  const titleStyles = {
    display: "flex",
    alignItems: "flex-end",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "lighter",
    fontSize: "72px",
    paddingLeft: "20px",
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle the category
  };

  return (
    <div style={appStyles}>
      {/* Title and logo section */}
      <div style={titleStyles}>
        Alexandre Estapé
        <div style={{ marginLeft: "24px" }}>
          {Object.entries(profiles).map(([key, { src, link }]) => (
            <ImageLink key={key} src={src} link={link} />
          ))}
          <LightBulbButton />
        </div>
      </div>

      {/* Buttons for each big category */}
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        {Object.keys(allData).map((category) => (
          <button
            style={styleButtonlvl1}
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Conditionally render grids for the selected category */}
      {selectedCategory && (
        <div style={{ display: "flex" }}>
          {Object.entries(allData[selectedCategory]).map(
            ([gridName, gridData]) => (
              <GridComponent
                key={gridName}
                nameGrid={gridName}
                data={gridData}
              />
            )
          )}
        </div>
      )}
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
