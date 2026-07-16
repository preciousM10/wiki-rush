import Container from "../ui/Container";
import Image from "next/image";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const socials = [
  { icon: FaFacebookF },
  { icon: FaLinkedinIn },
  { icon: FaInstagram },
  { icon: FaTiktok },
];

const characters = [
  {
    src: "/image/footer/wiki.png",
    alt: "Wiki",
  },
  {
    src: "/image/footer/loger.png",
    alt: "Loger",
  },
  {
    src: "/image/footer/ferna.png",
    alt: "Ferna",
  },
  {
    src: "/image/footer/luna.png",
    alt: "Luna",
  },
];

export default function Footer() {
  return (
    <footer className="relative">

      {/* ================= BACKGROUND ================= */}

      <section
        className="
        relative
        overflow-hidden
       h-[1120px]

sm:h-[1200px]

md:h-[980px]

lg:h-[1050px]

xl:h-[1120px]
        
      "
      >
<div className="relative h-full">
  {/* Desktop */}

  <Image
    src="/image/footer/desktop-bg.png"
    alt="Footer Background"
    fill
    priority
    className="hidden md:block object-cover object-top"
  />

  {/* Mobile */}

  <Image
    src="/image/footer/mobile-bg.png"
    alt="Footer Background"
    fill
    priority
    className="block md:hidden object-cover object-top"
  />

</div>

        <div className="absolute inset-0 bg-black/10" />

        {/* ================= BLUE CARD ================= */}

        <Container
          className="
            absolute

            left-0
            right-0
            bottom-8
            
            md:bottom-4
            
            lg:bottom-10
          "
        >

          <div
            className="
              relative

              overflow-hidden

              rounded-[32px]

              lg:rounded-[67px]

              bg-[radial-gradient(circle_at_top,#3D8FFF_0%,#2C75ED_35%,#1659C8_75%,#0D4AAE_100%)]

              shadow-[0_40px_120px_rgba(0,0,0,.35)]
            "
          >

            {/* ================= TOP ================= */}

            <div
              className="
                flex

                flex-col

                gap-12

                px-7

                pt-10

                lg:flex-row

                lg:justify-between

                lg:px-16

                lg:pt-14
              "
            >

              {/* LEFT */}

              <div
                className="
                  max-w-[340px]
                "
              >

                <Image
                  src="/image/logo.png"
                  alt="Wiki Rush"
                  width={70}
                  height={70}
                  className="
                    w-16

                    md:w-20
                  "
                />

                <p
                  className="
                    mt-6

                    text-sm

                    md:text-base

                    leading-5


                    text-gray-300
                  "
                >
                  Run through the vibrant streets of Lagos,
                  unlock unique characters,
                  collect powerful boosts,
                  and chase your next high score.
                </p>

              </div>

              {/* RIGHT */}

              <div
                className="
                  flex

                  flex-col

                  gap-10

                  sm:flex-row

                  sm:gap-20
                "
              >

                {/* SUPPORT */}

                <div>

                  <h3
                    className="
                      mb-5

                      font-semibold

                      text-gray-300
                    "
                  >
                    Support
                  </h3>

                  <div
                    className="
                      space-y-3

                      text-gray-300
                    "
                  >

                    <p className="hover:text-white cursor-pointer transition">
                      Terms of Service
                    </p>

                    <p className="hover:text-white cursor-pointer transition">
                      Privacy Policy
                    </p>

                  </div>

                </div>

                {/* COMMUNITY */}

                <div>

                  <h3
                    className="
                      mb-5

                      font-semibold

                      text-white
                    "
                  >
                    Community
                  </h3>

                  <div
                    className="
                      flex

                      gap-5

                      text-xl

                      text-white
                    "
                  >

                    {socials.map((item, index) => {

                      const Icon = item.icon;

                      return (

                        <Icon
                          key={index}
                          className="
                            cursor-pointer

                            transition

                            hover:text-yellow-400
                          "
                        />

                      );

                    })}

                  </div>

                </div>

              </div>

            </div>

            {/* Divider */}

          


            {/* Copyright */}

            <div
                className="
                  relative

                  z-20

                  mt-6

                  border-t

                  border-white/10

                  py-6

                  text-center

                  text-xs

                  md:text-sm

                  text-gray-300
                "
              >
                © 2026 WikiCat Rush | All Rights Reserved.
              </div>


                        {/* ================= BOTTOM ================= */}

                        <div
                     className="
                     relative
                     flex
                     flex-col
                     justify-end
                     
                     h-[180px]
                     
                     sm:h-[220px]
                     
                     md:h-[240px]
                     
                     lg:h-[260px]
                     "
                     >

              {/* Watermark */}

              <h1
                className="
                  absolute

                  left-1/2
                  bottom-20

                  -translate-x-1/2

                  whitespace-nowrap

                  uppercase

                  font-black

                  tracking-[-0.02em]

                  pointer-events-none

                  select-none

                  text-white/[0.110]

                  text-[50px]

                  sm:text-[95px]

                  md:text-[120px]

                  lg:text-[140px]

                 
                "
              >
                WIKICAT RUSH
              </h1>

              {/* Characters */}

              <div
                className="
                  relative

                  z-10

                  flex

                  justify-between

                  items-end

                  px-4

                  sm:px-8

                  md:px-10

                  lg:px-16

                  pt-10
                "
              >
                {characters.map((character) => (
                  <Image
                    key={character.alt}
                    src={character.src}
                    alt={character.alt}
                    width={180}
                    height={200}
                    className="
                      w-[70px]

                      sm:w-[90px]

                      md:w-[115px]

                      lg:w-[150px]
                      

                

                      h-auto

                      transition-transform

                      duration-300

                      hover:-translate-y-2
                    "
                  />
                ))}
              </div>

              
            </div>

          </div>

        </Container>

      </section>

    </footer>
  );
}













































//     <footer className="relative">

//       {/* Background */}
//       <section className="relative h-[680px] md:h-[760px] lg:h-[980px]">

//         <Image
//           src="/image/footer/background.png"
//           alt="Footer Background"
//           fill
//           priority
//           className="
//             object-cover
//             object-top
            
            
//           "
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/10" />

//         {/* Blue Card */}
//         <Container className="absolute inset-x-0 bottom-8 lg:bottom-12 z-20">

//           <div
//             className="
//               mx-auto
//               w-full
//               max-w-[1404px]

//               min-h-[500px]
//               sm:min-h-[500px]
//               md:min-h-[340px]
//               lg:h-[525px]

//               rounded-[32px]
//               lg:rounded-[67px]

//               overflow-hidden

//               bg-gradient-to-b
//               from-[#2E83FF]
//               to-[#1D57C9]

//               shadow-[0_20px_80px_rgba(0,0,0,.35)]
//             "
//           >

//             {/* TOP */}
//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-10

//                 px-6
//                 pt-8

//                 md:flex-row
//                 md:justify-between
//                 md:items-start
//                 md:px-10

//                 lg:px-16
//                 lg:pt-14
//               "
//             >

//               {/* LEFT */}
//               <div className="w-full md:max-w-[330px]">

//                 <Image
//                   src="/image/logo.png"
//                   alt="Logo"
//                   width={70}
//                   height={70}
//                 />

//                 <p
//                   className="
//                     mt-6
//                     text-sm
//                     md:text-base
//                     leading-7
//                     tracking-[-0.02em]
//                     text-gray-300
//                   "
//                 >
//                   Run through the vibrant streets of Lagos, unlock unique
//                   characters, collect powerful boosts, and chase your next high
//                   score.
//                 </p>

//               </div>

//               {/* RIGHT */}
//               <div
//                 className="
//                   flex
//                   flex-col
//                   gap-8

//                   sm:flex-row
//                   sm:gap-16
//                 "
//               >

//                 {/* Support */}
//                 <div>

//                   <h4 className="mb-5 font-semibold text-white">
//                     Support
//                   </h4>

//                   <div className="space-y-4 text-sm md:text-base text-gray-300">

//                     <p className="cursor-pointer hover:text-white transition">
//                       Terms of Service
//                     </p>

//                     <p className="cursor-pointer hover:text-white transition">
//                       Privacy Policy
//                     </p>

//                   </div>

//                 </div>

//                 {/* Community */}
//                 <div>

//                   <h4 className="mb-5 font-semibold text-white">
//                     Community
//                   </h4>

//                   <div className="flex items-center gap-4 text-white">
//                     <FaFacebookF className="text-xl hover:text-yellow-400 transition cursor-pointer" />
//                     <FaLinkedinIn className="text-xl hover:text-yellow-400 transition cursor-pointer" />
//                     <FaInstagram className="text-xl hover:text-yellow-400 transition cursor-pointer" />
//                     <FaTiktok className="text-xl hover:text-yellow-400 transition cursor-pointer" />
//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </Container>

//       </section>

//     </footer>
//   );
// }