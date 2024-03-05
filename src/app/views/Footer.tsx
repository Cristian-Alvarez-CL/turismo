import React from "react";
import Image from "next/image";
import footerBackground from "../assets/img/Animales-en-negro-image.png";

export default function Footer() {
  return (
    <footer className="w-full relative">
      <div className="relative h-60 lg:h-80 overflow-hidden">
        <Image
          src={footerBackground}
          alt="Turismo Mapumay"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      <p className="absolute bottom-4 w-full text-center text-white text-lg z-10">
        © Copyright 2024. All Rights Reserved.
      </p>
    </footer>
  );
}
