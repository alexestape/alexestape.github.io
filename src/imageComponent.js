import React from "react";

const ImageLink = ({ src, link }) => {
  const handleImageClick = () => {
    window.open(link, "_blank");
  };

  return (
    <img
      src={src}
      onClick={handleImageClick}
      style={{
        cursor: "default",
        width: "100%",
        maxWidth: "300px",
        width: "24px",
        marginRight: "8px",
      }}
    />
  );
};

export default ImageLink;
