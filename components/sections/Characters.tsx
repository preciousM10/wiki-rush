import Image from "next/image";
import Container from "../ui/Container";
import { characters } from "../data/character";
import StoreButtons from "../ui/StoreButtons";



export default function Characters() {
  return (
    <section className="overflow-hidden py-[100px] px-5 lg:px-10">
      <Container>

        {/* ================= Heading ================= */}

        <div className="mx-auto mb-12 max-w-[300px] text-center">

          <p className="mb-3 text-[10px] uppercase font-medium tracking-[-0.02em] text-gray-400">
            Unlock Unique Characters
          </p>

          <h2 className="font-black uppercase leading-tight">

            <span className="block text-3xl md:text-4xl">
              Choose Your
            </span>

            <span className="mt-1 block text-3xl text-yellow-400 md:text-4xl">
              Street Legend
            </span>

          </h2>

        </div>

        {/* ================= Content ================= */}

        <div className="flex flex-col gap-10 lg:flex-row justify-center">

          {/* ================= Left Text ================= */}

          <div className="mx-auto w-full max-w-[353px]
           lg:mx-0 lg:w-[325px] lg:max-w-[325px] lg:flex-shrink-0">

            <p className="mt-8
                max-w-[420px]

                text-sm
                md:text-base

                leading-[1.8]
                tracking-[-0.02em]

                text-gray-300">
              Discover a growing collection of characters, each with their own
              style and personality. Unlock new favourites, customise your
              experience, and stand out every time you hit the road. From
              fearless runners to stylish legends, there's a character for every
              player.
            </p>

            {/* Buttons */}

            
              <StoreButtons className="mt-8" />
            

          </div>

          {/* ================= Cards ================= */}

          <div className="flex-1">

            {/* Desktop */}

            <div className="hidden lg:flex items-end gap-3">

              {characters.map((character) => (

                <div
                  key={character.title}
                  className="transition duration-300 hover:-translate-y-3"
                >

                  <div className="relative h-[372px] w-[210px]">

                    <Image
                      src={character.desktopimage}
                      alt={character.title}
                      fill
                      className="object-contain"
                    />

                  </div>

                </div>

              ))}

            </div>

            {/* Tablet & Mobile */}

            <div className="flex flex-col items-center gap-3 lg:hidden">

              {characters.map((character) => (

                <div
                  key={character.title}
                  className="relative h-[372px] w-full max-w-[353px]"
                >

                  <Image
                    src={character.mobileimage}
                    alt={character.title}
                    fill
                    className="object-contain"
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}