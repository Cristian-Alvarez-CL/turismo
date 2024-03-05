import Image from "next/image";
import mapumayImagenCircular from "../assets/img/mapumay_circular-image.jpeg";
import presentacion from "../common/data/presentacion.json";

export default function Hero() {
  return (
    <section className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center mx-auto pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="flex flex-col space-x-reverse py-6 mr-4 lg:mr-8">
        <h1 className="text-center text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter mb-8">
          Turismo Mapumay
        </h1>
        {presentacion.map((parrafo, idx) => (
          <p
            key={idx}
            className="text-justify text-xl text-slate-600 max-w-2xl"
          >
            {parrafo.content}
          </p>
        ))}
      </div>
      <div className="hidden lg:block ml-4 lg:ml-8">
        <Image
          className="h-full w-full object-cover"
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
