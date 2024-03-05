import Image from "next/image";
import mapumayImagenCircular from "@/assets/img/mapumay_circular.png";
const mapumayVideoSuperior =
  "https://cdn.pixabay.com/vimeo/413229662/cascada-37088.mp4?width=3840&hash=ef239afb3df2e22d7dfe6a02af444f0dd8e9599f";

export default function Hero4() {
  return (
    <section className="relative min-h-screen z-0">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={mapumayVideoSuperior} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center mx-auto pt-16 pb-8 md:pt-12 md:pb-24">
        <div className="flex flex-col space-x-reverse py-6 mr-4 lg:mr-8">
          <h1 className="text-center text-white text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter mb-8">
            Turismo Mapumay
          </h1>
          <p className="text-justify text-xl text-white max-w-2xl">
            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
            simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica
            de la literatura del Latin, que data del año 45 antes de Cristo,
            haciendo que este adquiera mas de 2000 años de antiguedad. Richard
            McClintock, un profesor de Latin de la Universidad de Hampden-Sydney
            en Virginia, encontró una de las palabras más oscuras de la lengua
            del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir
            leyendo distintos textos del latín, descubrió la fuente indudable.
            Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus
            Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero,
            escrito en el año 45 antes de Cristo. Este libro es un tratado de
            teoría de éticas, muy popular durante el Renacimiento. La primera
            linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una
            linea en la sección 1.10.32 El trozo de texto estándar de Lorem
            Ipsum usado desde el año 1500 es reproducido debajo para aquellos
            interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum
            et Malorum" por Cicero son también reproducidas en su forma original
            exacta, acompañadas por versiones en Inglés de la traducción
            realizada en 1914 por H. Rackham.
          </p>
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
      </div>
    </section>
  );
}
