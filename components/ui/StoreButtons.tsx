
import Image from "next/image";

type StoreButtonsProps = {
  className?: string;
};

export default function StoreButtons({
  className = "",
}: StoreButtonsProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 md:gap-4 ${className}`}
    >
      {/* Google Play */}

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/image/google-play.png"
          alt="Google Play"
          width={116}
          height={38}
          className="
            h-auto
            w-[140px]
            sm:w-[150px]
            md:w-[165px]
            lg:w-[150px]
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </a>

      {/* App Store */}

      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/image/app-store.png"
          alt="App Store"
          width={116}
          height={38}
          className="
            h-auto
            w-[140px]
            sm:w-[150px]
            md:w-[165px]
            lg:w-[150px]
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </a>
    </div>
  );
}