import Image from "next/image"

const imgAbout = "/images/mapumay/ocaso-mapuche.png"

export function AboutUs() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Sobre Turismo Mapumay</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Somos una agencia de turismo especializada en mostrar las maravillas naturales y culturales de nuestra
            región. Con más de 10 años de experiencia, nos dedicamos a crear experiencias únicas y memorables para
            nuestros visitantes.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Nuestro equipo está formado por guías locales con profundo conocimiento de la historia, cultura y naturaleza
            de cada destino que ofrecemos.
          </p>
          <p className="text-lg text-muted-foreground">
            En Turismo Mapumay nos comprometemos con el turismo sostenible, respetando y preservando los entornos
            naturales y las comunidades locales.
          </p>
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src={ imgAbout }
            alt="Equipo de Turismo Mapumay"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

