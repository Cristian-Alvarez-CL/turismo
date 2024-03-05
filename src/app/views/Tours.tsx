import Image from "next/image";
import { tours } from "@/common/data/tours";

export default function Tour() {
  return (
    <section>
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Tours</h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {tours.map((tour, index) => (
              <div key={index} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={tour.imageSrc}
                    alt={tour.imageAlt}
                    width={400} 
                    height={400}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <span className="text-white text-lg font-bold">{tour.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
