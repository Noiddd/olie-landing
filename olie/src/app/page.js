import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col justify-between overflow-hidden">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 mt-20">
        <h1 className="text-6xl sm:text-7xl text-black font-light tracking-tight text-center">
          Clarity and Confidence,
          <br />
          in your finances.
        </h1>

        {/* Download iOS button */}
        <a
          href="#download"
          className="mt-8 px-8 py-3 rounded-full bg-black text-white text-lg font-bold hover:bg-black/90 transition-colors flex items-center gap-2"
        >
          <Image
            src="/apple.logo.svg"
            alt="Apple Logo"
            width={15}
            height={20}
            className="w-[15px] h-[20px] "
          />
          Download on iOS
        </a>
      </div>

      {/* Phone Image */}
      <div className="w-full max-w-md ml-0 mt-auto">
        <Image
          src="/hand-with-olie.png"
          alt="Olie App Interface"
          width={800}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
