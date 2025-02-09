import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { config } from "react-spring";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";

// Dynamically import Carousel (disables SSR for this component)
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

// Updated ProjectCarousel component with increased container height
const ProjectCarousel = ({ project }) => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = project.images.map((imgSrc, index) => ({
    key: `${project.id}-${index}`,
    onClick: () => setGoToSlide(index),
    content: (
      <div
        className="flex flex-col select-none"
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="relative w-[650px] h-80 mb-4">
          <Image
            src={imgSrc}
            alt={`${project.title} - image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    ),
  }));

  // Drag gesture for the project's carousel
  const containerRef = useRef(null);
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (down && distance > 500) {
        if (xDir < 0) {
          setGoToSlide((prev) => (prev + 1) % slides.length);
        } else if (xDir > 0) {
          setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
        cancel();
      }
    },
    { axis: "x" }
  );

  return (
    // Updated height from h-[300px] to h-[350px] to fully accommodate the image container.
    <div
      ref={containerRef}
      {...bind()}
      className="relative w-[1000px] h-[350px] select-none"
      onDragStart={(e) => e.preventDefault()}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={2}
        showNavigation={true}
        animationConfig={config.gentle}
      />
    </div>
  );
};

export default function PortfolioPage() {
  // Define your portfolio categories and their projects.
  const portfolioCategories = {
    "Custom Websites": [
      {
        id: 1,
        title: "JSaltyLens",
        description:
          "A custom-built website tailored for a photography portfolio.",
        images: [
          "/images/portfolio/jsaltylens/jsaltylens1.webp",
          "/images/portfolio/jsaltylens/jsaltylens2.webp",
          "/images/portfolio/jsaltylens/jsaltylens3.webp",
        ],
      },
    ],
    "High-Converting Landing Pages": [
      {
        id: 2,
        title: "SC Barges",
        description:
          "A high-converting landing page designed for lead generation.",
        images: [
          "/images/portfolio/scbarges/scbarges1.webp",
          "/images/portfolio/scbarges/scbarges2.webp",
          "/images/portfolio/scbarges/scbarges3.webp",
        ],
      },
    ],
    "Web Applications": [
      {
        id: 3,
        title: "SurfLink Web",
        description:
          "A fully responsive web application for surfing analytics.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
      {
        id: 4,
        title: "Planner Web App",
        description: "An intuitive planner web application for productivity.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
    ],
    "SEO-Focused Websites": [
      {
        id: 5,
        title: "Moreton Bay SS",
        description: "An SEO-optimized website for a local school.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
      {
        id: 6,
        title: "Bayside Plumbing",
        description: "A high-performance website optimized for search engines.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
      {
        id: 7,
        title: "Pure Plumbing",
        description: "A modern SEO-focused website for a plumbing service.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
    ],
    "Mobile Apps": [
      {
        id: 8,
        title: "SurfLink App",
        description: "A cross-platform mobile app for surfing enthusiasts.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
    ],
    "Graphic Design": [
      {
        id: 9,
        title: "Flow Connect",
        description:
          "Branding and design for a professional networking platform.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
      {
        id: 10,
        title: "Mx Brazil",
        description: "Logo and marketing design for an action sports brand.",
        images: [
          "/images/rafael.webp",
          "/images/rafael-surfing.webp",
          "/images/rafael-black-shirt.webp",
        ],
      },
    ],
  };

  // Category selection state.
  const categories = Object.keys(portfolioCategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Get projects for the selected category.
  const portfolioData = portfolioCategories[selectedCategory];

  /**
   * For the horizontal (project) carousel we want an infinite (seamless)
   * experience. For categories with more than one project, we’ll now show
   * one project per slide.
   */
  const visibleCount = 1; // Changed from 2 to 1 so each slide shows 1 project.
  const clonesCount = 5; // Replicate the projects 5 times.
  const isInfinite = portfolioData.length > 1; // Use infinite mode if there is more than 1 project.

  // Build the full items array.
  const items = isInfinite
    ? Array.from({ length: clonesCount }, () => portfolioData).flat()
    : portfolioData;

  // In infinite mode, start in the center copy.
  const initialIndex = isInfinite
    ? Math.floor(clonesCount / 2) * portfolioData.length
    : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Reset the carousel when the category changes.
  useEffect(() => {
    if (isInfinite) {
      setCurrentIndex(Math.floor(clonesCount / 2) * portfolioData.length);
      setTransitionEnabled(true);
    }
  }, [selectedCategory, isInfinite, portfolioData.length]);

  // Handlers for next/previous buttons.
  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // When a transition ends, reposition the index if needed.
  const handleTransitionEnd = () => {
    if (!isInfinite) return;
    const total = portfolioData.length;
    // Define the bounds for the middle (safe) copy.
    const middleIndexStart = Math.floor(clonesCount / 2) * total;
    const middleIndexEnd = middleIndexStart + total;
    if (currentIndex < middleIndexStart) {
      setTransitionEnabled(false);
      setCurrentIndex(middleIndexEnd - (middleIndexStart - currentIndex));
    } else if (currentIndex >= middleIndexEnd) {
      setTransitionEnabled(false);
      setCurrentIndex(middleIndexStart + (currentIndex - middleIndexEnd));
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
    <div className="min-h-screen flex flex-col items-center justify-center text-white select-none">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">My Portfolio</h1>
        <p className="text-center max-w-2xl mx-auto mb-10">
          Below are some of my featured projects categorized by service type.
          Select a category to explore.
        </p>

        {/* Category Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 p-3 rounded-full hover:bg-gray-800 transition-all"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 p-3 rounded-full hover:bg-gray-800 transition-all"
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
              <div className="overflow-hidden">
                <div
                  className="flex"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    // With visibleCount set to 1, each slide takes 100% of the width.
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
                      className="flex-shrink-0 px-4"
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
            // For categories with 1 project, simply show it.
            <div className="flex justify-center gap-8">
              {portfolioData.map((project) => (
                <div key={project.id} className="w-1/2 max-w-[600px]">
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
