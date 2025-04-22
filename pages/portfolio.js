// pages/portfolio.jsx
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProjectCarousel from "../components/Carousel";
import { portfolioCategories } from "../data/portfolioData";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => window.removeEventListener("mousemove", setFromEvent);
  }, []);

  return position;
}

export default function PortfolioPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Get categories from data.
  const categories = useMemo(() => Object.keys(portfolioCategories), []);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Update selected category based on URL query.
  useEffect(() => {
    if (router.query.category && categories.includes(router.query.category)) {
      setSelectedCategory(router.query.category);
    }
  }, [router.query.category, categories]);

  // Get projects for the selected category.
  const portfolioData = portfolioCategories[selectedCategory];

  // Infinite carousel logic.
  const visibleCount = 1;
  const clonesCount = 5;
  const isInfinite = portfolioData.length > 1;
  const items = isInfinite
    ? Array.from({ length: clonesCount }, () => portfolioData).flat()
    : portfolioData;

  // Start in the center copy in infinite mode.
  const initialIndex = isInfinite
    ? Math.floor(clonesCount / 2) * portfolioData.length
    : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Reset carousel on category change.
  useEffect(() => {
    if (isInfinite) {
      setCurrentIndex(Math.floor(clonesCount / 2) * portfolioData.length);
      setTransitionEnabled(true);
    }
  }, [selectedCategory, isInfinite, portfolioData.length]);

  // Handlers for navigation.
  const handleNext = () => {
    if (!transitionEnabled) return; // avoid rapid clicks during transition
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!transitionEnabled) return; // only process click if transition is allowed
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Adjust index when transition ends to create a seamless infinite loop.
  const handleTransitionEnd = () => {
    if (!isInfinite) return;
    const total = portfolioData.length;
    const middleIndexStart = Math.floor(clonesCount / 2) * total;
    const middleIndexEnd = middleIndexStart + total;

    if (currentIndex < middleIndexStart) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + total);
    } else if (currentIndex >= middleIndexEnd) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - total);
    }
  };

  // Re-enable transitions after a jump.
  useEffect(() => {
    if (!transitionEnabled) {
      const id = setTimeout(() => setTransitionEnabled(true), 0);
      return () => clearTimeout(id);
    }
  }, [transitionEnabled]);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900/30 flex flex-col text-gray-300">
      <Head>
        <title>Portfolio - Rafael | Web Developer</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects including websites, web applications, and e-commerce solutions."
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

      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full flex items-center justify-center overflow-hidden">
        <div className="w-full flex flex-col items-center">
          {/* Animated header section */}
          <div
            className={`transition-all duration-1000 transform mb-8 text-center ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm px-4">
              Explore my featured projects showcasing innovative solutions
              across various platforms and technologies.
            </p>

            {/* Category Selection - styled like about page */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    router.push(
                      { pathname: router.pathname, query: { category } },
                      undefined,
                      { shallow: true }
                    );
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Carousel - modernized */}
          <div
            className={`relative w-full max-w-[1200px] mx-auto transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {isInfinite ? (
              <>
                <button
                  onClick={handlePrev}
                  disabled={!transitionEnabled}
                  aria-label="Previous Project"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md hover:shadow-xl transition transform duration-300 hover:scale-110 text-white flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!transitionEnabled}
                  aria-label="Next Project"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md hover:shadow-xl transition transform duration-300 hover:scale-110 text-white flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="overflow-hidden rounded-xl backdrop-blur-sm bg-black/20 border border-gray-800/50">
                  <div
                    className="flex"
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                      transform: `translateX(-${
                        currentIndex * (100 / visibleCount)
                      }%)`,
                      transition: transitionEnabled
                        ? "transform 300ms ease-in-out"
                        : "none",
                    }}
                  >
                    {items.map((project, index) => (
                      <div
                        key={index}
                        style={{ width: `${100 / visibleCount}%` }}
                        className="flex-shrink-0 md:px-4"
                      >
                        <div className="flex flex-col items-center justify-center p-4">
                          <ProjectCarousel project={project} />
                          <div className="flex flex-col items-center justify-center mt-6 bg-gradient-to-b from-blue-900/30 to-black/30 p-4 rounded-xl backdrop-blur-sm border border-blue-800/30">
                            <h3 className="text-xl font-semibold mb-2 text-blue-200">
                              {project.title}
                            </h3>
                            <p className="text-sm text-center text-gray-300 max-w-lg">
                              {project.description}
                            </p>

                            {/* Added tech stack and links */}
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                              {project.technologies?.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-blue-900/40 rounded-full text-xs text-blue-300 border border-blue-800/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="mt-4 flex gap-4">
                              {project.liveLink && (
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-800/30 transition-all duration-300"
                                >
                                  View Live
                                </a>
                              )}
                              {project.githubLink && (
                                <a
                                  href={project.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-700 transition-all duration-300"
                                >
                                  GitHub
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Single project display with enhanced styling
              <div className="flex justify-center">
                {portfolioData.map((project) => (
                  <div key={project.id} className="w-full max-w-[800px]">
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl backdrop-blur-sm bg-black/20 border border-gray-800/50">
                      <ProjectCarousel project={project} />
                      <div className="flex flex-col items-center justify-center mt-6 bg-gradient-to-b from-blue-900/30 to-black/30 p-4 rounded-xl backdrop-blur-sm border border-blue-800/30 w-full">
                        <h3 className="text-xl font-semibold mb-2 text-blue-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-center text-gray-300 max-w-lg">
                          {project.description}
                        </p>

                        {/* Added tech stack and links */}
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                          {project.technologies?.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-blue-900/40 rounded-full text-xs text-blue-300 border border-blue-800/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex gap-4">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-800/30 transition-all duration-300"
                            >
                              View Live
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-700 transition-all duration-300"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
