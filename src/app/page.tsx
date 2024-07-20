import Image from "next/image";
import CasinoCard from "./components/CasinoCard";
import IMAGES from "@/assets/images";

export default function Home() {
  return (
    <main className="px-4">
      <header className="mt-[52px]">
        <h1 className="font-semibold font-[700] text-primary text-2xl">
          Best Casinos 2024
        </h1>
      </header>
      <section className="mt-3">
        <CasinoCard imageAlt="Grosvenor Casinos" imageSrc={IMAGES.grosvenor} />
      </section>
    </main>
  );
}
