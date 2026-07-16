import Container from "../ui/Container"
import Image from "next/image"

const features = [
    {
        title: "Complete\nMission",
        image: "/image/Mystery/Gift box.png",
        height: 160,
    },
    {
        title: "Collect\nCoins",
        image: "/image/Mystery/Coins.png",
        height: 140,
    },
    {
        title: "Open mystery\nboxes",
        image: "/image/Mystery/Mystery box.png",
        height: 150,
    },
    {
        title: "Get\npower-Up",
        image: "/image/Mystery/Maggnet.png",
        height: 164,
    },
]

export default function Mystery () {
    return (
        <section className="py-16 lg:py-20 bg-[#087920]">
                <Container className="items-center flex flex-col">
                    <div className="mx-auto max-w-[660px] 
                     px-4 text-center">
                    <p className="
                 mb-3
                 tracking-[-0.02em]
                 uppercase
                 font-medium
                 text-[10px]
                 text-gray-200
               
                ">
                   POWER-UPS & REWARDS
                </p>

             <h2 className="
             uppercase
             leading-[135%]
             tracking-[-2%]
             font-bold

             text-2xl
             sm:text-3xl
             lg:text-4xl
             
             ">The More You Play, 

             <br />
             <span className="
             uppercase
             block
             text-yellow-500

             "> The More You Earn</span>

             </h2>
                    </div>

                    <div
  className="
    mt-12
    flex
    flex-col
    lg:flex-row
    items-center
    justify-center
    w-full
  "
>
  {features.map((feature, index) => (
    <div
      key={feature.title}
      className="
        flex
        flex-col
        lg:flex-row
        items-center
      "
    >
      {/* CARD */}

      <div
        className="
          w-full 
          lg:w-[170px]
          max-w-[353px]
          flex
          flex-col
          items-center
          text-center
        "
      >
        <div
          className="
            h-[155px]
            flex
            items-end
            justify-center
          "
        >
          <Image
            src={feature.image}
            alt={feature.title}
            width={160}
            height={feature.height}
          />
        </div>

        <h3
          className="
            mt-3
            min-h-[48px]
            whitespace-pre-line
            text-white
            uppercase
            font-bold
            text-sm
            leading-[140%]
          "
        >
          {feature.title}
        </h3>
      </div>

      {/* DESKTOP ARROW */}

      {index !== features.length - 1 && (
        <>
          <Image
            src="/image/Mystery/arrow.png"
            alt=""
            width={31}
            height={29}
            className="
              hidden
              lg:block
              mx-3
              lg:rotate-270
              self-center
            "
          />

          <Image
            src="/image/Mystery/arrow.png"
            alt=""
            width={50}
            height={50}
            className="
              lg:hidden
              my-6
              rotate-360
              self-center
              opacity-40
            "
          />
        </>
      )}
    </div>
  ))}

                    </div>
                </Container>
        </section>
    )
}