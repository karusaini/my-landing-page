import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#f4ede4] py-16 px-10 md:px-20 flex flex-col md:flex-row items-center">
      {/* Left - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Slack is where the future works
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Button className="bg-purple-600 text-white px-6 py-3">
            Try for Free
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-gray-700 px-6 py-3 flex items-center gap-2"
          >
            <Image src="/google-icon.png" alt="Google" width={30} height={20} />
            Sign Up with Google
          </Button>
        </div>
      </div>

      {/* Right - Image Preview */}
      <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative">
        <Image
          src="/slack-preview.png"
          alt="Slack UI Preview"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
