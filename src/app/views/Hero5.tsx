import Image from "next/image";
import mapumayImagenCircular from "@/assets/img/mapumay_circular.png";
const mapumayVideoSuperior =
  "https://cdn.pixabay.com/vimeo/413229662/cascada-37088.mp4?width=3840&hash=ef239afb3df2e22d7dfe6a02af444f0dd8e9599f";

export default function Hero5() {
  return (
    <section className="relative min-h-screen flex items-center justify-center z-0">


    <video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
      <source src={mapumayVideoSuperior} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  

    <div className="relative z-10 flex flex-col items-center justify-center p-4">
  

      <Image
        className="w-full max-w-2xl h-auto object-cover"
        src={mapumayImagenCircular}
        alt="Turismo Mapumay"
        width={500}
        height={500}
        sizes="(max-width: 800px) 100vw, 620px"
        loading="eager"
      />
  
    </div>
    </section>
  );
}
