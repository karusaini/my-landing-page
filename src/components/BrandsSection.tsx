import Image from "next/image";
import Link from "next/link";

export default function BrandsSection() {
  return (
    <section className="bg-[#f4ede4] py-10 px-6 md:px-20">
      {/* Brands Logo Section */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-12">
        <Link href="https://www.fox.com/" target="_blank">
          <Image
            src="/fox.png"
            alt="FOX"
            width={120}
            height={50}
            className="w-[90px] md:w-[110px]"
          />
        </Link>

        <Link href="https://www.lonelyplanet.com/" target="_blank">
          <Image
            src="/lonely-planet.png"
            alt="Lonely Planet"
            width={120}
            height={50}
            className="w-[90px] md:w-[110px]"
          />
        </Link>

        <Link href="https://www.intuit.com/" target="_blank">
          <Image
            src="/intuit.png"
            alt="Intuit"
            width={120}
            height={50}
            className="w-[90px] md:w-[110px]"
          />
        </Link>

        <Link href="https://www.carvana.com/" target="_blank">
          <Image
            src="/carvana.png"
            alt="Carvana"
            width={120}
            height={50}
            className="w-[90px] md:w-[110px]"
          />
        </Link>

        <Link href="https://www.kiva.org/" target="_blank">
          <Image
            src="/kiva.png"
            alt="Kiva"
            width={120}
            height={50}
            className="w-[90px] md:w-[110px]"
          />
        </Link>

        <Link href="https://www.target.com/" target="_blank">
          <Image
            src="/target.png"
            alt="Target"
            width={120}
            height={50}
            className="w-[90px] md:w-[110px]"
          />
        </Link>
      </div>
    </section>
  );
}
