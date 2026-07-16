"use client";

import Container from "../ui/Container";
import StoreButtons from "../ui/StoreButtons";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/image/hero.png"
          alt="Wiki Rush Hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen flex-col py-6 md:py-8 lg:py-10">

        {/* Logo */}
        <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Image
              src="/image/logo.png"
              alt="Wiki Rush Logo"
              width={120}
              height={88}
              priority
              className="w-24 md:w-28 lg:w-32"
            />
          </motion.div>

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
            <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
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

              <motion.span
                 initial={{
                   scale: 0.8,
                 }}
                 animate={{
                   scale: 1,
                 }}
                 transition={{
                   duration: 0.5,
                   delay: 0.8,
                 }}
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
              </motion.span>
            </motion.h1>

            {/* Store Badges */}
            <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                }}
                className="flex gap-3"
              >
                <StoreButtons className="mt-8" />
            </motion.div>

          </div>
        </div>

      </Container>
    </section>
  );
}