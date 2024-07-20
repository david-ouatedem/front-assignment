import React from "react";
import Image from "next/image";

interface OwnProps {
  imageSrc: string;
  imageAlt: string;
}

const CasinoCard: React.FC<OwnProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="rounded bg-white customDropShadow p-4">
      <figure>
        <Image
          height={100}
          width={50}
          layout="responsive"
          src={imageSrc}
          alt={imageAlt}
        />
      </figure>
    </div>
  );
};

export default CasinoCard;
