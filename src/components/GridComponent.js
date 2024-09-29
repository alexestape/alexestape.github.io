import React from "react";
import { useTheme } from "./ThemeContext";
import { HoverButton } from "./HoverButton";
import { Grid, GridTitle, GridItem } from "./styles";

const GridComponent = ({ gridTitle, data }) => {
  const { isDarkMode } = useTheme();

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Grid>
      <GridTitle>{gridTitle}</GridTitle>
      {data.map((item, index) => (
        <GridItem
          key={index}
          isLast={index === data.length - 1}
          textColor={item.textColor}
          isDarkMode={isDarkMode}
        >
          {item.name}
          <HoverButton
            color={item.buttonColor}
            onClick={() => handleButtonClick(item.link)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default GridComponent;
