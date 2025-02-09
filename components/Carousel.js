// components/CustomCarousel.js
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function CustomCarousel(props) {
  const [offsetRadius, setOffsetRadius] = useState(props.offset || 2);
  const [showArrows, setShowArrows] = useState(props.showArrows || false);
  const [goToSlide, setGoToSlide] = useState(null);

  // Recalculate cards on every render so they reflect the current props
  const cards = props.cards.map((card, index) => ({
    ...card,
    onClick: () => setGoToSlide(index),
  }));

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin || "0 auto",
      }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
