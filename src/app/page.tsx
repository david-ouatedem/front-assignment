import Image from "next/image";
import IMAGES from "@/assets/images";
import dynamic from "next/dynamic";
const CasinoCard = dynamic(() => import("@/app/components/CasinoCard"));

export default function Home() {
  return (
    <main className="px-4 lg:px-11 pb-10">
      <header className="mt-[52px]">
        <h1 className="font-semibold font-[700] text-primary text-2xl">
          Best Casinos 2024
        </h1>
      </header>
      <section className="mt-3 flex flex-col items-center gap-y-5">
        <CasinoCard
          label="Grosvenor Casinos"
          imageAlt="Grosvenor Casinos"
          imageSrc={IMAGES.grosvenor}
          rating={5}
          className="bg-[#03242b]"
        />
        <CasinoCard
          label="Happy Spins"
          imageAlt="Happy Spins"
          imageSrc={IMAGES.happysins}
          rating={4}
          labelClassName="underline-offset-4"
          className="bg-[#42072d]"
        />
        <CasinoCard
          label="Hajper"
          imageAlt="Hajper"
          imageSrc={IMAGES.hajper}
          rating={3}
          labelClassName="underline-offset-4"
          className="bg-[#123055]"
        />
      </section>
    </main>
  );
}
