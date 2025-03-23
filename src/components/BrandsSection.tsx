import Image from "next/image";
import Link from "next/link";

export default function BrandsSection() {
  return (
    <section className="bg-[#f4ede4] py-10 px-10 md:px-20">
      {/* Brands Logo Section (One Line) */}
      <div className="flex justify-center items-center gap-x-12">
        <Link href="https://www.fox.com/" target="_blank">
          <Image src="/fox.png" alt="FOX" width={100} height={40} />
        </Link>

        <Link href="https://www.lonelyplanet.com/" target="_blank">
          <Image
            src="/lonely-planet.png"
            alt="Lonely Planet"
            width={100}
            height={40}
          />
        </Link>

        <Link href="https://www.intuit.com/" target="_blank">
          <Image src="/intuit.png" alt="Intuit" width={100} height={40} />
        </Link>

        <Link href="https://www.carvana.com/" target="_blank">
          <Image src="/carvana.png" alt="Carvana" width={100} height={40} />
        </Link>

        <Link href="https://www.kiva.org/" target="_blank">
          <Image src="/kiva.png" alt="Kiva" width={100} height={40} />
        </Link>

        <Link href="https://www.target.com/" target="_blank">
          <Image src="/target.png" alt="Target" width={100} height={40} />
        </Link>
      </div>
    </section>
  );
}
