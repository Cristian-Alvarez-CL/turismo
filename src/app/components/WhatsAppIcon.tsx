import React from "react";
import Image from "next/image";
import whatsappIcon from "@/assets/icon/whatsapp-icon.png";

const whatsAppURL =
  "https://api.whatsapp.com/send/?phone=56989456816&text=Hola+Turismo+Mapumay.+Necesito+m%C3%A1s+Informaci%C3%B3n+sobre+sus+tours&type=phone_number&app_absent=0";

const WhatsAppIcon = () => {
  return (
    <a
      href={whatsAppURL}
      className="fixed left-4 bottom-4 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={whatsappIcon.src} alt="WhatsApp" width="60" height="60" />
    </a>
  );
};

export default WhatsAppIcon;
