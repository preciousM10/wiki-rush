import Container from "../ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/image/hero.png"
        alt="Wiki Rush Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen flex-col py-6 md:py-8 lg:py-10">

        {/* Logo */}
        <Image
          src="/image/logo.png"
          alt="Wiki Rush Logo"
          width={120}
          height={88}
          priority
          className="w-24 md:w-28 lg:w-32"
        />

        {/* Hero Content */}
        <div
          className="
            flex-1
            flex
            items-end
            pb-10

            md:items-end
            md:pb-16

            lg:items-center
            lg:pb-0
          "
        >
          <div className="max-w-[340px] text-left">

            {/* Heading */}
            <h1
              className="
                uppercase
                font-bold
                text-white

                leading-[1.05]
                tracking-[-0.02em]

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[55px]
              "
            >
              RUN THE
              <br />
              STREETS OF
              <br />

              <span
                className="
                  block
                  text-yellow-400

                  leading-[1]
                  tracking-[-0.04em]

                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[96px]
                "
              >
                LAGOS!
              </span>
            </h1>

            {/* Store Badges */}
            <div className="mt-6 flex flex-wrap gap-3">

              <Image
                src="/image/google-play.png"
                alt="Google Play"
                width={140}
                height={42}
                className="w-28 md:w-36 transition duration-300 hover:scale-105"
              />

              <Image
                src="/image/app-store.png"
                alt="App Store"
                width={140}
                height={42}
                className="w-28 md:w-36 transition duration-300 hover:scale-105"
              />

            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}