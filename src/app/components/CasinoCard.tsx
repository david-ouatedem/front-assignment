import React from "react";
import Image from "next/image";
import IconYellowStar from "@/assets/icons/IconYellowStar";
import IconWhiteStar from "@/assets/icons/IconWhiteStar";
import { twMerge } from "tailwind-merge";

interface OwnProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  rating: 1 | 2 | 3 | 4 | 5;
  labelClassName?: string;
  className?: string;
}

const CasinoCard: React.FC<OwnProps> = ({
  imageSrc,
  imageAlt,
  label,
  rating,
  labelClassName,
  className,
}) => {
  return (
    <div className="rounded bg-white customDropShadow p-4 w-full lg:flex items-center lg:gap-5">
      <div className="md:grid grid-cols-2 md:gap-4 lg:flex lg:gap-12 w-full">
        <div
          className={twMerge(
            "flex items-center justify-center w-full h-[132px] md:h-full lg:max-w-[224px] lg:shrink-0",
            className
          )}
        >
          <figure>
            <Image
              width={100}
              height={50}
              src={imageSrc}
              alt={imageAlt}
              className="max-h[256px] h-auto w-auto"
            />
          </figure>
        </div>
        <div className="lg:flex lg:gap-20 lg:items-center shrink-0">
          <div>
            <a href="#">
              <h2
                className={twMerge(
                  "text-black font-regular text-xl underline underline-offset-2 decoration-[#808080] text-center md:text-start mt-5 md:mt-0",
                  labelClassName
                )}
              >
                {label}
              </h2>
            </a>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-5">
              {[...Array(5)].map((_, index) => (
                <span key={index}>
                  {index < rating ? <IconYellowStar /> : <IconWhiteStar />}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 md:mt-8 lg:mt-0 flex flex-col items-center md:items-start lg:items-center lg:w-full">
            <p className="font-medium !font-[600] text-xl text-black leading-[24px]">
              Bonus
            </p>
            <p className="font-regular text-[28px] text-black text-center md:text-start lg:text-center leading-[34px]">
              Bet £10 <br className="md:hidden lg:block" /> Get £400
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end xl:justify-center">
        <button
          type="button"
          className="lg:max-w-[190px] xl:max-w-[308px]  mt-4 md:mt-5 lg:mt-0 font-[700] font-regular text-xl rounded-[10px] h-[64px] w-full bg-secondary text-white text-center hover:bg-[#056A21] transition-all duration-300 ease-out"
        >
          Bet Now
        </button>
      </div>
    </div>
  );
};

export default CasinoCard;
