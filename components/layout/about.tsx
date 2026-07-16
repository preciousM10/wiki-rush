"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";


const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

export default function About() {
    return(
        <section className="  pt-20 py-24 lg:py-[100px]  ">
            <Container className=" items-center flex flex-col  ">
                {/* main */}
                <motion.div
                 className="mx-auto max-w-[390px] lg:max-w-[660px] px-4 text-center"
                 variants={staggerContainer}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.3 }}
               >

<motion.p
  variants={fadeUp}
  className="mb-3 tracking-[-0.02em] uppercase font-medium text-[10px] text-gray-400"
>
                    About WikiCat Rush 
                </motion.p>

                <motion.h2
  variants={fadeUp}
  className="
    uppercase
    leading-[135%]
    tracking-[-2%]
    font-bold
    text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-4xl
  "
>LAGOS HAS NEVER 
             <br />
             <span className="
             uppercase
             block
             text-yellow-500

             "> MOVED THIS FAST</span>

             </motion.h2>

             <motion.div
  variants={fadeUp}
  className="
    font-normal
    mt-8
    space-y-8
    text-base
    md:text-lg
    lg:text-xl
    leading-[150%]
    tracking-[-0.02em]
    sm:text-gray-200
    lg:text-gray-300
  "
>
                <p>
                 WikiCat Rush is an endless runner built around the speed, culture, 
                and excitement of Lagos. 
                Step into the paws of WikiCat and dash through bustling streets packed with traffic, 
                market stalls, local buses, and unexpected challenges. 
                </p>
                
                <p>
                Every run is a chance to go further, collect more coins, unlock new characters, 
                and climb the global leaderboard. 
                Whether you're chasing a new high score or mastering every power-up, 
                the streets always have something new waiting ahead.
                </p>
                </motion.div>

               </motion.div>

               {/* Feature/ Icons */}

               <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  className="
    mt-12
    flex
    flex-col
    md:flex-row
    md:gap-10
    items-start                                                                                                                                                            
    md:items-center
    justify-center
    gap-10
    font-medium
    text-gray-400
  "                                                                                              
>                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                        
<motion.div
  variants={fadeUp}
  whileHover={{
    y: -4,
  }}
  transition={{
    duration: 0.2,
  }}
  className="flex items-center gap-3"
>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <Image 
               src="/image/flash.png"
               alt="Fast-paced Gameplay"
               width={26}
               height={36}
               priority
               
               />

               <p className="flex items-center gap-2 ">Fast-paced Gameplay</p>

               </motion.div>

               {/* f2 */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

               <motion.div
  variants={fadeUp}
  whileHover={{
    y: -4,
  }}
  transition={{
    duration: 0.2,
  }}
  className="flex items-center gap-3"
>
               <Image 
               src="/image/paw.png"
               alt="icons"
               width={36}
               height={33}
               priority
               
               />

               <p className="flex items-center gap-2">Unique Character</p>

               </motion.div>

               <motion.div
  variants={fadeUp}
  whileHover={{
    y: -4,
  }}
  transition={{
    duration: 0.2,
  }}
  className="flex items-center gap-3"
>

              <Image 
               src="/image/endless.png"
               alt="icons"
               width={43}
               height={23}
               priority
               
               />

               <p className="flex items-center gap-2">Endless Adventure</p>

               </motion.div>
               </motion.div>

               

            </Container>
        </section>
    )
}