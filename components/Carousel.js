// components/ProjectCarousel.jsx
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import { config } from "react-spring";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";

// Dynamically import the Carousel (disable SSR)
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const ProjectCarousel = ({ project }) => {
  const [goToSlide, setGoToSlide] = useState(0);

  // Determine sizing based on project title.
  const isPlannerProject = project.title === "Planner Web App";
  const isFlowConnectProject = project.title === "Flow Connect";
  const isMobileProject = project.title === "SurfLink App";

  let carouselContainerClasses, imageContainerClasses;

  if (isPlannerProject) {
    carouselContainerClasses = "relative w-[400px] h-[420px] select-none";
    imageContainerClasses = "relative w-[220px] h-[390px] mb-4";
  } else if (isMobileProject) {
    carouselContainerClasses = "relative w-[350px] h-[400px] select-none";
    imageContainerClasses = "relative w-[180px] h-[390px] mb-4";
  } else if (isFlowConnectProject) {
    carouselContainerClasses = "relative w-[500px] h-[420px] select-none";
    imageContainerClasses = "relative w-[280px] h-[390px] mb-4";
  } else {
    carouselContainerClasses =
      "relative w-[375px] xs:w-[430px] md:w-[1000px] h-48 md:h-[350px] select-none";
    imageContainerClasses =
      "relative w-[300px] xs:w-[350px] md:w-[660px] h-42 md:h-80 mb-4";
  }

  // Map images to slides.
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

  // Drag gesture for the carousel.
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
        animationConfig={config.gentle}
      />
      {slides.length > 1 && (
        <>
          <button
            onClick={() =>
              setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="absolute -bottom-16 md:-bottom-18 left-[35%] -translate-y-1/2 z-10 bg-blue-500/50 p-3 rounded-full hover:bg-blue-500 transition-all cursor-pointer"
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
            onClick={() => setGoToSlide((prev) => (prev + 1) % slides.length)}
            className="absolute -bottom-16 md:-bottom-18 right-[35%] -translate-y-1/2 z-10 bg-blue-500/50 p-3 rounded-full hover:bg-blue-500 transition-all cursor-pointer"
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
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
