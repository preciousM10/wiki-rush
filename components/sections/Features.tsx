"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import StoreButtons from "../ui/StoreButtons";
import Image from "next/image";


const features = [
    {
        image: "/image/Mystery/Maggnet.png",
        title: "Collect Powerful Boosts",
        description: "Grab magnets, shields, speed shoes, and special boosts as you run. Every power-up helps you survive longer and push your score higher.",
        bg: "bg-[#071A2F]",
        border: "border-[#083F79]"
    },
    {
        image: "/image/Skateboard.png",
        title: "Ride Your Skateboard",
        description: 
        "Double tap to activate your skateboard and speed through traffic while staying protected from danger.",
        bg: "bg-[#14072F]",
        border: "border-[#3D0879]"
    },
    {
        image: "/image/Mystery/Maggnet.png",
        title: "Dodge Lagos Traffic",
        description: 
        "Navigate through danfo buses, kekes, roadblocks, and busy streets inspired by everyday Lagos life.",
        bg: "bg-[#072F10]",
        border: "border-[#087920]"
    },
    {
        image: "/image/Trophy.png",
        title: "Chase High Scores",
        description: 
        "The longer you survive, the higher your score. Every run is an opportunity to beat your personal best.",
        bg: "bg-[#072F29]",
        border: "border-[#087968]"
    }
];


export default function Features() {

    return (
        <section className="py-[100px]">
            <Container className="flex flex-col items-center gap-[45px]">
            <motion.div
     className="mx-auto max-w-[660px] text-center"
     initial={{ opacity: 0, y: 40 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, amount: 0.3 }}
     transition={{ duration: 0.7 }}
   >
                    <p className="
                    mb-3
                 tracking-[-0.02em]
                 leading-[120%]
                 uppercase
                 font-medium
                 text-[10px]
                 text-gray-400
                 ">GAMEPLAY FEATURES</p>

                 <h2 className="
                 uppercase
             leading-[135%]
             tracking-[-0.02em]
             font-bold

             text-2xl
             sm:text-3xl
             md:text-4xl
             lg:text-4xl">BUILT FOR 
             
             <br />
             <span className="
             uppercase
             block
             text-yellow-500

             ">NONSTOP ACTION </span></h2>

             {/* Butoons */}

             
             <motion.div
  className="mt-8 flex gap-3"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: 0.3,
  }}
>
              <StoreButtons className="mt-8" />                    
            </motion.div>
                </motion.div>

                {/* grid */}
                <motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }}
>
                   {features.map((feature) => (
                    <motion.div
                    key={feature.title}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 50,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    whileHover={{
                      y: -12,
                    }}
                    className={`${feature.bg} rounded-4xl border-2
                    p-9 flex flex-col items-center text-center space-y-8
                    min-h-[320px] md:min-h-[376px] w-full max-w-[376px] ${feature.border}`}
                >
                    <motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
                        
                        src={feature.image}
                        alt={feature.title}
                        width={131}
                        height={131}
                        
                        />

                        </motion.div>

                        <h3 className="font-semibold text-gray-white text-xl uppercase mt-5 mb-3">
                        {feature.title}
                        </h3>

                        <p className="font-normal text-sm leading-relaxed text-gray-300 max-w-[270px]">
                            {feature.description}
                        </p>
                    </motion.div>
                    
                   ))}
                </motion.div>
            </Container>
        </section>
    );
}