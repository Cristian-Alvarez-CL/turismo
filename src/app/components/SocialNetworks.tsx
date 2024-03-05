import Image from "next/image";
import mapumayImagenRectangular from "../assets/img/mapumay_rectangular-image.jpeg";

export default function SocialNetworks() {
  //<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
  //
  return (
    <div className="w-full flex justify-center">
      <Image
        src={mapumayImagenRectangular.src}
        alt="Turismo Mapumay"
        width={500}
        height={500}
      />
    </div>
  );
}
