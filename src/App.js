import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import GridComponent from "./components/GridComponent";
import DarkMode from "./components/DarkMode";
import { data } from "./data/data";
import Profile from "./components/Profile";
import { profiles } from "./data/profiles";
import {
  AppContainer,
  NameAndProfiles,
  CategoryButton,
  CategoryButtonContainer,
  GridContainer,
} from "./components/styles";

const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const isMobile = window.innerWidth <= 800;

  return (
    <AppContainer theme={{ isDarkMode }}>
      {!isMobile && (
        <NameAndProfiles>
          Alexandre Estapé
          <div style={{ marginLeft: "24px" }}>
            {Object.entries(profiles).map(([key, { src, link }]) => (
              <Profile key={key} src={src} link={link} />
            ))}
            <DarkMode />
          </div>
        </NameAndProfiles>
      )}

      <CategoryButtonContainer>
        {Object.keys(data).map((category) => (
          <CategoryButton
            key={category}
            theme={{ isDarkMode }}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryButtonContainer>

      {/* Conditionally render grids for the selected category */}
      {selectedCategory && (
        <GridContainer isMobile={isMobile}>
          {Object.entries(data[selectedCategory]).map(
            ([gridName, gridData]) => (
              <GridComponent
                key={gridName}
                gridTitle={gridName}
                data={gridData}
              />
            )
          )}
        </GridContainer>
      )}
    </AppContainer>
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
