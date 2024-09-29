import styled from "styled-components";

const Grid = styled.div`
  display: block;
  width: 380px;
  padding: 30px;
`;

const GridTitle = styled.div`
  display: inline-block;
  border: 1px solid;
  padding: 5px;
  margin-right: 0;
  border-bottom: 0;
  font-family: "Lato", sans-serif;
`;

const GridItem = styled.div`
  border: 1px solid;
  border-bottom: ${({ isLast }) => (isLast ? "1px solid" : "0")};
  padding: 5px;
  font-family: Lato, sans-serif;
  color: ${({ textColor }) => (textColor !== "white" ? textColor : "inherit")};
  border-color: ${({ isDarkMode, textColor }) =>
    textColor !== "white" ? (isDarkMode ? "white" : "black") : "inherit"};
`;

const GridButton = styled.button`
  height: 20px;
  width: 20px;
  float: right;
  border-radius: 5px;
  border: 0;
  background-color: ${({ isHovered, isDarkMode, colors }) =>
    isHovered
      ? isDarkMode
        ? colors.hoverColorDark
        : colors.hoverColorLight
      : colors.unhoverColor};
`;

const StyledImage = styled.img`
  cursor: default;
  max-width: 300px;
  width: 24px;
  margin-right: 8px;
`;

const AppContainer = styled.div`
  background-color: ${({ theme }) => (theme.isDarkMode ? "#171717" : "#fff")};
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#000")};
  height: 100vh;
  padding: 20px;
`;

const NameAndProfiles = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: "Lato", sans-serif;
  font-weight: lighter;
  font-size: 72px;
  padding-left: 20px;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? "#404040" : "#d9d9d9"};
  color: ${({ theme }) => (theme.isDarkMode ? "white" : "black")};
  border: none;
  font-size: 16px;
  font-weight: 400;
  font-family: Lato;
`;

const CategoryButtonContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const GridContainer = styled.div`
  display: ${({ isMobile }) => (isMobile ? "block" : "flex")};
`;

export {
  Grid,
  GridTitle,
  GridItem,
  GridButton,
  StyledImage,
  AppContainer,
  NameAndProfiles,
  CategoryButton,
  CategoryButtonContainer,
  GridContainer,
};
