import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => window.removeEventListener("mousemove", setFromEvent);
  }, []);

  return position;
}

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900/30 flex flex-col text-gray-300">
      <Head>
        <title>Services | Rafael - Web Developer</title>
        <meta
          name="description"
          content="Professional web development services including custom websites, web applications, SEO optimization, and mobile app development."
        />
      </Head>

      {/* Custom cursor follower */}
      <div
        className="fixed w-8 h-8 rounded-full bg-blue-400 bg-opacity-20 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${
            mousePosition.y - 16
          }px)`,
          display: loaded ? "block" : "none",
        }}
      />

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full flex items-center justify-center">
        <div className="w-full">
          {/* Page Title Section with animation */}
          <div
            className={`text-center mb-8 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
              My Services
            </h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">
              From responsive websites to cross-platform apps, I deliver
              impactful digital experiences that help your business stand out.
            </p>
          </div>

          {/* Services Grid with staggered animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Service Card: Custom Websites */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <Link
                href={{
                  pathname: "/portfolio",
                  query: { category: "Custom Websites" },
                }}
              >
                <div className="block h-full cursor-pointer">
                  <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 h-full hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="mb-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <h2 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                        Custom Websites
                      </h2>
                      <p className="text-gray-400 text-xs md:text-sm line-height-relaxed">
                        Engaging, responsive, and tailored websites using modern
                        frameworks.
                      </p>
                    </div>
                    <div className="mt-auto w-fit inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-xs">
                      Learn More
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service Card: Landing Pages */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Link
                href={{
                  pathname: "/portfolio",
                  query: { category: "High-Converting Landing Pages" },
                }}
              >
                <div className="block h-full cursor-pointer">
                  <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="mb-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                      <h2 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                        Landing Pages
                      </h2>
                      <p className="text-gray-400 text-xs md:text-sm line-height-relaxed">
                        High-converting pages optimized for clear CTAs and
                        maximum results.
                      </p>
                    </div>
                    <div className="mt-auto w-fit inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-xs">
                      Learn More
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service Card: Web Applications */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Link
                href={{
                  pathname: "/portfolio",
                  query: { category: "Web Applications" },
                }}
              >
                <div className="block h-full cursor-pointer">
                  <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="mb-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <h2 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                        Web Applications
                      </h2>
                      <p className="text-gray-400 text-xs md:text-sm line-height-relaxed">
                        Scalable, secure apps using React, Next.js, Node.js and
                        more.
                      </p>
                    </div>
                    <div className="mt-auto w-fit inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-xs">
                      Learn More
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service Card: SEO-Focused Websites */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Link
                href={{
                  pathname: "/portfolio",
                  query: { category: "SEO-Focused Websites" },
                }}
              >
                <div className="block h-full cursor-pointer">
                  <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="mb-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                        SEO Optimization
                      </h2>
                      <p className="text-gray-400 text-xs md:text-sm line-height-relaxed">
                        Enhance visibility and drive organic traffic with solid
                        on-page optimization.
                      </p>
                    </div>
                    <div className="mt-auto w-fit inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-xs">
                      Learn More
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service Card: Mobile Apps */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Link
                href={{
                  pathname: "/portfolio",
                  query: { category: "Mobile Apps" },
                }}
              >
                <div className="block h-full cursor-pointer">
                  <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="mb-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                        Mobile Apps
                      </h2>
                      <p className="text-gray-400 text-xs md:text-sm line-height-relaxed">
                        Cross-platform apps using React Native for iOS and
                        Android.
                      </p>
                    </div>
                    <div className="mt-auto w-fit inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-xs">
                      Learn More
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service Card: Graphic Design */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Link
                href={{
                  pathname: "/portfolio",
                  query: { category: "Graphic Design" },
                }}
              >
                <div className="block h-full cursor-pointer">
                  <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="mb-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </div>
                      <h2 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                        Graphic Design
                      </h2>
                      <p className="text-gray-400 text-xs md:text-sm line-height-relaxed">
                        Branding, logos, and marketing materials to elevate your
                        brand.
                      </p>
                    </div>
                    <div className="mt-auto w-fit inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-xs">
                      Learn More
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-5px) translateX(15px);
          }
        }
      `}</style>
    </div>
  );
}
