// pages/portfolio.jsx
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import ProjectCarousel from "../components/Carousel";
import { portfolioCategories } from "../data/portfolioData";

export default function PortfolioPage() {
  const router = useRouter();

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
  // This correction brings the currentIndex back into the center copy of the items.
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
    <div className="min-h-[calc(var(--vh,1vh)*93)] flex flex-col items-center justify-center text-white select-none overflow-x-hidden pb-16">
      <div className="w-full md:container mx-auto md:px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 inline-block text-transparent bg-clip-text mb-4 md:mb-6">
          My Portfolio
        </h1>
        <p className="text-center text-gray-300 mx-auto mb-4 md:mb-10">
          Below are some of my featured projects categorized by service type.
          Select a category to explore.
        </p>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-12">
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
              className={`px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <div className="relative w-full max-w-[1300px] mx-auto">
          {isInfinite ? (
            <>
              <button
                onClick={handlePrev}
                disabled={!transitionEnabled}
                aria-label="Previous Project"
                className={`absolute md:left-4 ${
                  selectedCategory === "Web Applications"
                    ? "md:bottom-auto bottom-40"
                    : "md:bottom-auto bottom-20"
                } md:top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md hover:shadow-xl transition transform duration-300 hover:scale-110 text-white text-xs font-medium flex items-center gap-2 cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
                <span>PREV</span>
              </button>
              <button
                onClick={handleNext}
                disabled={!transitionEnabled}
                className={`absolute right-0 md:right-4 ${
                  selectedCategory === "Web Applications"
                    ? "md:bottom-auto bottom-40"
                    : "md:bottom-auto bottom-20"
                } md:top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md hover:shadow-xl transition transform duration-300 hover:scale-110 text-white text-xs font-medium flex items-center gap-2 cursor-pointer`}
              >
                <span>NEXT</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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

              <div className="overflow-hidden">
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
                      <div className="flex flex-col items-center justify-center">
                        <ProjectCarousel project={project} />
                        <div className="flex flex-col items-center justify-center mt-20">
                          <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-center">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // Single project display.
            <div className="flex justify-center gap-8">
              {portfolioData.map((project) => (
                <div key={project.id} className="w-2/3 md:w-1/2 max-w-[600px]">
                  <div className="flex flex-col items-center justify-center">
                    <ProjectCarousel project={project} />
                    <div className="flex flex-col items-center justify-center mt-20">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-center">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
