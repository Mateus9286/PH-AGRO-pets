import React, { useState, useEffect } from "react";
import whatsappIcon from "../../assets/WhatsApp-icone-3.png";
import { Button } from "./styles";

const YourComponent = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        window.location.href =
          "https://api.whatsapp.com/send?phone=5534998700647";
      }, 500);
    }
  }, [isTransitioning]);

  const handleLinkClick = () => {
    setIsTransitioning(true);
  };

  return (
    <>
      <Button onClick={handleLinkClick}>
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </Button>
    </>
  );
};

export default YourComponent;
