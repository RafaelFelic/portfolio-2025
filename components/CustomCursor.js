import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    let frame = null;
    let x = 0;
    let y = 0;
    let revealed = false;

    const render = () => {
      frame = null;

      const node = ref.current;
      if (!node) return;

      node.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;

      if (!revealed) {
        revealed = true;
        node.style.opacity = "1";
      }
    };

    const handleMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (frame === null) frame = requestAnimationFrame(render);
    };

    const handleLeave = () => {
      const node = ref.current;
      if (node) node.style.opacity = "0";
      revealed = false;
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      if (frame !== null) cancelAnimationFrame(frame);
      root.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-400 bg-opacity-20 pointer-events-none z-50 mix-blend-difference"
      style={{ opacity: 0, transform: "translate3d(-100px, -100px, 0)" }}
    />
  );
}
