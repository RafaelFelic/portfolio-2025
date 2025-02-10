import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { config } from "react-spring";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";

// Dynamically import Carousel (disables SSR for this component)
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

// Updated ProjectCarousel component with conditional sizing for specific projects.
const ProjectCarousel = ({ project }) => {
  const [goToSlide, setGoToSlide] = useState(0);

  // Determine project type for sizing.
  const isPlannerProject = project.title === "Planner Web App";
  const isFlowConnectProject = project.title === "Flow Connect";
  const isMobileProject = project.title === "SurfLink App";

  let carouselContainerClasses, imageContainerClasses;

  if (isPlannerProject) {
    // Planner Web App gets a bit more width.
    carouselContainerClasses = "relative w-[400px] h-[420px] select-none";
    imageContainerClasses = "relative w-[220px] h-[390px] mb-4";
  } else if (isMobileProject) {
    // Mobile app gets a smaller container.
    carouselContainerClasses = "relative w-[350px] h-[400px] select-none";
    imageContainerClasses = "relative w-[180px] h-[390px] mb-4";
  } else if (isFlowConnectProject) {
    // Flow Connect gets a bit more width.
    carouselContainerClasses = "relative w-[500px] h-[420px] select-none";
    imageContainerClasses = "relative w-[280px] h-[390px] mb-4";
  } else {
    // Desktop projects.
    carouselContainerClasses = "relative w-[1000px] h-[350px] select-none";
    imageContainerClasses = "relative w-[660px] h-80 mb-4";
  }

  // Map project images to slides.
  const slides = project.images.map((imgSrc, index) => ({
    key: `${project.id}-${index}`,
    onClick: () => setGoToSlide(index),
    content: (
      <div
        className="flex flex-col select-none"
        onDragStart={(e) => e.preventDefault()}
      >
        <div className={imageContainerClasses}>
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

  // Drag gesture for the project's carousel.
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
    <div
      ref={containerRef}
      {...bind()}
      className={carouselContainerClasses}
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
  const router = useRouter();

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
          "A high-converting landing page designed for marine services.",
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
          "A fully responsive web application for surfing social media connecting the surf community.",
        images: [
          "/images/portfolio/surflink-web/surflink-web1.webp",
          "/images/portfolio/surflink-web/surflink-web2.webp",
          "/images/portfolio/surflink-web/surflink-web3.webp",
        ],
      },
      {
        id: 4,
        title: "Planner Web App",
        description: "An intuitive planner web application for productivity.",
        images: [
          "/images/portfolio/planner/planner1.webp",
          "/images/portfolio/planner/planner2.webp",
          "/images/portfolio/planner/planner3.webp",
        ],
      },
    ],
    "SEO-Focused Websites": [
      {
        id: 5,
        title: "Moreton Bay SS",
        description:
          "An SEO-optimized website for a security doors, screens, windows and blinds company.",
        images: [
          "/images/portfolio/moretonbayss/moretonbayss1.webp",
          "/images/portfolio/moretonbayss/moretonbayss2.webp",
          "/images/portfolio/moretonbayss/moretonbayss3.webp",
        ],
      },
      {
        id: 6,
        title: "Bayside Plumbing",
        description:
          "A high-performance website optimized for a local plumbing company.",
        images: [
          "/images/portfolio/baysideplumbing/baysideplumbing1.webp",
          "/images/portfolio/baysideplumbing/baysideplumbing2.webp",
          "/images/portfolio/baysideplumbing/baysideplumbing3.webp",
        ],
      },
      {
        id: 7,
        title: "Pure Plumbing",
        description: "A modern SEO-focused website for a plumbing service.",
        images: [
          "/images/portfolio/pureplumbing/pureplumbing1.webp",
          "/images/portfolio/pureplumbing/pureplumbing2.webp",
          "/images/portfolio/pureplumbing/pureplumbing3.webp",
        ],
      },
    ],
    "Mobile Apps": [
      {
        id: 8,
        title: "SurfLink App",
        description:
          "A cross-platform(IOS and Android) mobile app, social media connecting photographers and surfers.",
        images: [
          "/images/portfolio/surflink-app/surflink-app1.webp",
          "/images/portfolio/surflink-app/surflink-app2.webp",
          "/images/portfolio/surflink-app/surflink-app3.webp",
        ],
      },
    ],
    "Graphic Design": [
      {
        id: 9,
        title: "Flow Connect",
        description:
          "Branding and design for a local fitness company, Ginastica Natural Flow.",
        images: ["/images/portfolio/flowconnect/flyer.webp"],
      },
      {
        id: 10,
        title: "Logos",
        description: "Logo design for a variety of clients.",
        images: [
          "/images/portfolio/logos/surflink.webp",
          "/images/portfolio/logos/wx.webp",
          "/images/portfolio/logos/mx-brazil.webp",
        ],
      },
    ],
  };

  // Category selection state.
  const categories = Object.keys(portfolioCategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Update selected category from URL query if present.
  useEffect(() => {
    if (router.query.category && categories.includes(router.query.category)) {
      setSelectedCategory(router.query.category);
    }
  }, [router.query.category, categories]);

  // Get projects for the selected category.
  const portfolioData = portfolioCategories[selectedCategory];

  /**
   * For the horizontal (project) carousel we want an infinite (seamless)
   * experience. For categories with more than one project, we'll now show
   * one project per slide.
   */
  const visibleCount = 1; // Each slide shows 1 project.
  const clonesCount = 5; // Replicate the projects 5 times.
  const isInfinite = portfolioData.length > 1; // Use infinite mode if more than 1 project.

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
      <div className="container mx-auto px-4 text-center">
        <h1 className="md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 inline-block text-transparent bg-clip-text mb-6">
          My Portfolio
        </h1>
        <p className="text-center text-gray-300 mx-auto mb-10">
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
