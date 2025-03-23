import Image from "next/image";

export default function FutureSection() {
  return (
    <section className="relative bg-[#f4ede4] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Side - Video Preview */}
      <div className="relative w-full md:w-[45%] flex justify-center">
        <Image
          src="/future-video-thumbnail.png"
          alt="Future Video"
          width={500}
          height={300}
          className="w-full max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg"
        />
        {/* Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-4 md:p-5 rounded-full hover:bg-red-700 transition">
          ▶
        </button>
      </div>

      {/* Right Side - Text & CTA */}
      <div className="w-full md:w-[45%] text-center md:text-left px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight md:leading-snug">
          Now is your moment to build a better tomorrow
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          We've seen what the future can be. Now it's time to decide what it
          will be.
        </p>
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Watch Video
        </button>
      </div>

      {/* ✅ Cookie Consent Image */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 hidden sm:block">
        <Image
          src="/cookie-consent.png"
          alt="Cookie Consent"
          width={250}
          height={150}
          className="w-[160px] sm:w-[200px] md:w-[250px] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
