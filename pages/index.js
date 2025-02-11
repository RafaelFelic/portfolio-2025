import Link from "next/link";
import { useEffect } from "react";

function useLockBodyScroll() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}

function useVhHeight() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);
}

export default function Portfolio() {
  useLockBodyScroll();
  useVhHeight();

  return (
    <section
      className="relative flex flex-col items-center justify-center"
      style={{ height: "calc(var(--vh, 1vh) * 93)" }}
    >
      <div className="relative z-20 w-[200px] h-[200px] md:w-[200px] md:h-[200px] animate-[fadeInScale_1s_ease-out]">
        <img
          className="w-full h-full opacity-90 border-6 border-gray-500 object-cover block rounded-full shadow-[0_0_100px_rgba(255,255,255,0.3)]"
          src="/images/rafael-surfing-office.webp"
          alt="Rafael's profile picture"
        />
      </div>

      <div className="relative z-20 text-center text-white mt-4">
        <h1 className="text-5xl mb-6">
          {/* The <br /> will only be visible on mobile screens */}
          Welcome to <br className="block md:hidden" />
          <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent font-semibold text-6xl">
            My Portfolio
          </span>
        </h1>

        <p className="text-xl font-extralight px-12 xs:px-4">
          Discover my projects and skills in{" "}
          <span className="font-semibold">web development</span> and{" "}
          <span className="font-semibold">UX/UI design</span>.
        </p>

        <Link
          href="/about"
          className="inline-block py-3 px-8 m-6 bg-gradient-to-r from-blue-200 to-blue-600 text-black rounded-full font-semibold transition duration-500 ease-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
