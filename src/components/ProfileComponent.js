import React from "react";

const ProfileComponent = ({ src, link }) => {
  const handleImageClick = () => {
    window.open(link, "_blank");
  };

  return (
    <img
      src={src}
      onClick={handleImageClick}
      alt={""}
      style={{
        cursor: "default",
        maxWidth: "300px",
        width: "24px",
        marginRight: "8px",
      }}
    />
  );
};

export default ProfileComponent;
