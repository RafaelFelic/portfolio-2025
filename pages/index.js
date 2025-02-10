import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="relative z-20
          w-[200px] h-[200px] md:w-[200px] md:h-[200px]
          animate-[fadeInScale_1s_ease-out]"
      >
        <img
          className="w-full h-full opacity-90 border-6 border-gray-500 object-cover block rounded-full shadow-[0_0_100px_rgba(255,255,255,0.3)]"
          src="/images/rafael-surfing-office.webp"
          alt="Rafael's profile picture"
        />
      </div>

      <div className="relative z-20 text-center text-white !mt-4">
        <h1 className="text-5xl !mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent font-semibold text-6xl">
            My Portfolio
          </span>
        </h1>

        <p className="text-xl font-extralight">
          Discover my projects and skills in{" "}
          <span className="font-semibold">web development</span> and{" "}
          <span className="font-semibold">UX/UI design</span>.
        </p>
        <Link
          href="/about"
          className="
            inline-block !py-3 !px-8 !mt-6
            bg-gradient-to-r from-blue-200 to-blue-600 text-black   
            rounded-full font-semibold
            transition duration-500 ease-out
            hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 hover:text-white
          "
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
