import Image from "next/image";
import Container from "../ui/Container";

const features = [
  {
    image: "/image/car.png",
    title: "Avoid Traffic",
    title1: "Avoid",
    title2: "Traffic",
  },
  {
    image: "/image/coin.png",
    title: "Collect Rewards",
    title1: "Collect",
    title2: "Rewards",
  },
  {
    image: "/image/speed.png",
    title: "Master Every Route",
    title1: "Master",
    title2: "Every Route",
  },
];

export default function Testimonials() {
  return (
    <section>
      <Container>

        <div className="overflow-hidden rounded-xl lg:flex">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 bg-[#1E73FF] px-8 py-12 md:px-12 md:py-16 
          lg:px-16 lg:py-20 flex items-center">

            <div className="max-w-[502px]">

              <p className="mb-4 text-[10px] uppercase 
              font-medium tracking-[-0.02em] text-blue-300 ">
                Explore a world inspired by Lagos
              </p>

              <h2
                className="
                uppercase
                font-bold
                leading-[1.15]
                tracking-[-0.02em]

                text-2xl
                md:text-3xl
                lg:text-4xl
              "
              >
                Every Street
                <br />

                <span className="text-yellow-400">
                  Tells A Story
                </span>
              </h2>

              <p
                className="
                mt-8
                max-w-[420px]

                text-sm
                md:text-base

                leading-[1.8]
                tracking-[-0.02em]

                text-blue-100
              "
              >
                From crowded market roads and colourful storefronts to iconic
                yellow buses and bustling intersections, WikiCat Rush captures
                the energy and personality of Lagos in a vibrant arcade
                experience. The city isn't just a backdrop. It's part of the
                challenge.
              </p>

              {/* FEATURES */}

              <div className="mt-8 flex justify-between gap-4">

                {features.map((feature) => (

                  <div
                    key={feature.title}
                    className="flex flex-col items-center text-center"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={55}
                      height={55}
                    />

                    <span
                      className="
                      mt-3
                      text-[11px]
                      uppercase
                      font-medium
                      text-blue-100
                    "
                    >
                      {feature.title1}
                      <br />
                      {feature.title2}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
            relative

            h-[320px]
            md:h-[450px]

            lg:h-auto
            lg:w-1/2
          "
          >
            <Image
              src="/image/lagos-city.png"
              alt="Lagos City"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>

      </Container>
    </section>
  );
}