import React from "react";
import { StyledImage } from "./styles";

const ProfileComponent = ({ src, link }) => {
  const handleImageClick = () => {
    window.open(link, "_blank");
  };

  return <StyledImage src={src} onClick={handleImageClick} alt="" />;
};

export default ProfileComponent;
