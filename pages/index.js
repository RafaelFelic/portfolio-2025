import Link from "next/link";
import { useEffect, useState } from "react";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if we're on a touch device
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (!isTouchDevice) {
      const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", setFromEvent);
      return () => window.removeEventListener("mousemove", setFromEvent);
    }
  }, [isTouchDevice]);

  return { position, isTouchDevice };
}

export default function Portfolio() {
  const { position: mousePosition, isTouchDevice } = useMousePosition();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent animate-pulse">
          Loading...
        </div>
      </div>

      {/* Custom cursor follower - hidden on touch devices */}
      {!isTouchDevice && (
        <div
          className="fixed w-8 h-8 rounded-full bg-blue-400 bg-opacity-20 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 16}px, ${
              mousePosition.y - 16
            }px)`,
            display: loaded ? "block" : "none",
          }}
        />
      )}

      <section
        className={`bg-gradient-to-b from-black via-gray-900 to-blue-900/30 h-screen transition-colors duration-500 text-white`}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-60" />

        {/* Background particles - reduced for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(isTouchDevice ? 10 : 20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/10"
              style={{
                width: `${Math.random() * 10 + 4}px`,
                height: `${Math.random() * 10 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 10 + 15
                }s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative  py-16 flex flex-col md:flex-row items-center h-screen justify-center md:justify-between max-w-7xl mx-auto px-6 md:px-10">
          {/* Left side: Image with more spacing */}
          <div className="w-full md:w-2/5 flex items-center justify-center md:justify-end mb-12 md:mb-0 md:pr-10">
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] animate-[fadeInScale_1s_ease-out]">
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 animate-pulse"
                style={{ animationDuration: "3s" }}
              />
              <Link href="/about">
                <img
                  className="relative w-full h-full opacity-90 border-4 border-blue-500/50 object-cover block rounded-full shadow-[0_0_60px_rgba(96,165,250,0.3)] hover:scale-105 transition-transform duration-500 cursor-pointer"
                  src="/images/rafael-black-shirt.webp"
                  alt="Rafael's profile picture"
                />
              </Link>

              {/* Floating skill badges - adjusted for mobile */}
              {/* Top (12 o'clock) - UX/UI */}
              <Link
                href="/techstack"
                className="absolute top-[-20px] sm:top-[-30px] left-1/2 -translate-x-1/2 bg-purple-600/90 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform rotate-6 hover:scale-110 transition-transform cursor-pointer"
              >
                UX/UI
              </Link>

              {/* Top right (1-2 o'clock) - React */}
              <Link
                href="/techstack"
                className="absolute top-[10%] right-[-20px] sm:right-[-24px] bg-[#61DAFB]/90 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform rotate-12 hover:scale-110 transition-transform cursor-pointer"
              >
                React
              </Link>

              {/* Right (3 o'clock) - Node.js */}
              <Link
                href="/techstack"
                className="absolute top-1/2 -translate-y-1/2 right-[-20px] sm:right-[-30px] bg-[#339933]/90 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform -rotate-8 hover:scale-110 transition-transform cursor-pointer"
              >
                Node.js
              </Link>

              {/* Bottom right (4-5 o'clock) - Tailwind */}
              <Link
                href="/techstack"
                className="absolute bottom-[10%] right-[-20px] sm:right-[-24px] bg-[#06B6D4]/90 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform -rotate-12 hover:scale-110 transition-transform cursor-pointer"
              >
                Tailwind
              </Link>

              {/* Bottom (6 o'clock) - Full-Stack */}
              <Link
                href="/techstack"
                className="absolute bottom-[-20px] sm:bottom-[-30px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600/90 to-green-600/90 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform -rotate-3 hover:scale-110 transition-transform cursor-pointer"
              >
                Full-Stack
              </Link>

              {/* Bottom left (7-8 o'clock) - JavaScript */}
              <Link
                href="/techstack"
                className="absolute bottom-[10%] left-[-20px] sm:left-[-24px] bg-[#F7DF1E]/90 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform rotate-10 hover:scale-110 transition-transform cursor-pointer"
              >
                JavaScript
              </Link>

              {/* Left (9 o'clock) - Next.js */}
              <Link
                href="/techstack"
                className="absolute top-1/2 -translate-y-1/2 left-[-20px] sm:left-[-30px] bg-black/90 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform rotate-8 hover:scale-110 transition-transform cursor-pointer"
              >
                Next.js
              </Link>

              {/* Top left (10-11 o'clock) - TypeScript */}
              <Link
                href="/techstack"
                className="absolute top-[10%] left-[-20px] sm:left-[-24px] bg-[#3178C6]/90 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transform -rotate-15 hover:scale-110 transition-transform cursor-pointer"
              >
                TypeScript
              </Link>
            </div>
          </div>

          {/* Right side: Text content with added spacing */}
          <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start space-y-4 md:space-y-6 md:pl-10">
            <h2 className="text-xl md:text-2xl font-light text-blue-400 opacity-0 animate-[fadeInScale_0.5s_ease-out_0.2s_forwards]">
              Hello, I'm{" "}
              <span className="text-blue-300 font-medium">Rafael</span>
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold opacity-0 animate-[fadeInScale_0.5s_ease-out_0.4s_forwards]">
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Creative Developer
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-light max-w-lg opacity-0 animate-[fadeInScale_0.5s_ease-out_0.6s_forwards]">
              Turning ideas into{" "}
              <span className="font-medium">amazing digital experiences</span>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3 opacity-0 animate-[fadeInScale_0.5s_ease-out_0.8s_forwards]">
              <Link
                href="/about"
                className="py-2 px-6 sm:py-3 sm:px-8 border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500/20 rounded-full font-medium transition duration-300 ease-out text-sm sm:text-base"
              >
                About Me
              </Link>
              <Link
                href="/portfolio"
                className="py-2 px-6 sm:py-3 sm:px-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-medium transition duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/30 hover:translate-y-[-2px] text-sm sm:text-base"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="py-2 px-6 sm:py-3 sm:px-8 bg-transparent 
                border-2 
                border-blue-400 
                text-blue-400 
                rounded-full 
                font-medium 
                transition 
                duration-300 
                ease-out hover:text-blue-300 text-sm sm:text-base"
              >
                Contact
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex gap-6 mt-6 md:mt-8 opacity-0 animate-[fadeInScale_0.5s_ease-out_1s_forwards]">
              {["github", "linkedin", "twitter"].map((social, i) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transform transition-all duration-300 hover:scale-110"
                  aria-label={`Visit my ${social} profile`}
                >
                  <div className="w-6 h-6 opacity-70 hover:opacity-100"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
