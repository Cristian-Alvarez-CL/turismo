import Image from "next/image";
import mapumayImagenCircular from "@/assets/img/mapumay_circular.png";
const mapumayVideoFrente =
  "https://player.vimeo.com/external/328428416.hd.mp4?s=fa02b255fa889778086413be73fadec52a120743&profile_id=172&oauth2_token_id=57447761";

export default function Hero3() {
  return (
    <section className="z-0 relative min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={mapumayVideoFrente} type="video/mp4" />
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
