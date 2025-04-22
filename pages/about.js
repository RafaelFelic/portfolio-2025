import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => window.removeEventListener("mousemove", setFromEvent);
  }, []);

  return position;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const mousePosition = useMousePosition();
  const [typingText, setTypingText] = useState("");
  const codeLines = [
    "<div>",
    "  <Developer />",
    "  <Designer />",
    "  <Innovator />",
    "</div>",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Set loaded after a brief delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    // Typing animation
    let currentLine = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingTimer;

    const type = () => {
      const line = codeLines[currentLine];

      if (isDeleting) {
        setTypingText(line.substring(0, currentChar - 1));
        currentChar--;
      } else {
        setTypingText(line.substring(0, currentChar + 1));
        currentChar++;
      }

      // Typing speed
      let typingSpeed = isDeleting ? 30 : 70;

      // If completed typing the line
      if (!isDeleting && currentChar === line.length) {
        typingSpeed = 1000; // Pause at end of line
        isDeleting = true;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentLine = (currentLine + 1) % codeLines.length;
        typingSpeed = 500; // Pause before typing next line
      }

      typingTimer = setTimeout(type, typingSpeed);
    };

    type();

    return () => {
      clearTimeout(timer);
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <div className="text-gray-300 h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900/30 flex flex-col">
      <Head>
        <title>About Me - Rafael | Web Developer</title>
        <meta
          name="description"
          content="Discover the digital journey of Rafael, a passionate web developer specializing in front-end and UX/UI design. Learn more about my work and vision."
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

      <main className="flex-1 max-w-6xl mx-auto px-4 flex items-center justify-center overflow-hidden">
        <div className="w-full">
          {/* Animated section header */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          </div>

          {/* Main content grid layout with more compact spacing */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
            {/* Left column: Simple laptop line animation */}
            <div className="col-span-2">
              <div
                className={`relative h-56 w-full transition-all duration-1000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                } flex items-center justify-center`}
              >
                {/* Laptop container with perspective */}
                <div className="relative w-56 h-40 perspective-1000">
                  {/* Laptop base */}
                  <div className="absolute bottom-0 w-56 h-2 bg-blue-400 rounded-lg"></div>
                  <div className="absolute bottom-2 w-56 h-8 border-2 border-blue-400 rounded-b-lg"></div>

                  {/* Laptop keyboard glowing dots */}
                  <div className="absolute bottom-6 left-16 w-1 h-1 bg-blue-300 rounded-full animate-pulse-fast"></div>
                  <div className="absolute bottom-5 left-28 w-1 h-1 bg-blue-300 rounded-full animate-pulse-medium"></div>
                  <div className="absolute bottom-4 left-10 w-1 h-1 bg-blue-300 rounded-full animate-pulse-slow"></div>

                  {/* Laptop screen */}
                  <div className="absolute bottom-10 w-56 h-30 border-2 border-blue-400 rounded-t-lg bg-blue-900/30 flex items-center justify-center overflow-hidden">
                    {/* Screen content */}
                    <div className="text-left p-3 font-mono text-xs text-blue-300">
                      <div>
                        &gt; {typingText}
                        <span className="inline-block w-1.5 h-3.5 bg-blue-400 animate-blink"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Introduction text - more compact */}
            <div className="col-span-3 flex flex-col gap-4">
              <div
                className={`transition-all duration-1000 delay-300 transform ${
                  isVisible ? "opacity-100" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-xl font-bold text-blue-400 mb-2">
                  Hi, I'm <span className="text-blue-300">Rafael</span> – a Web
                  Developer, UX/UI Designer, and AI enthusiast.
                </h2>
                <p className="text-base leading-relaxed">
                  I create immersive digital experiences that connect users with
                  innovative, responsive interfaces. My work fuses visual appeal
                  with technical expertise to deliver seamless experiences
                  across all devices.
                </p>
              </div>

              {/* Skills section with improved visual presentation - more compact */}
              <div
                className={`transition-all duration-1000 delay-500 transform ${
                  isVisible ? "opacity-100" : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-300">
                  My Expertise
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Front-end Development",
                    "UX/UI Design",
                    "Performance Optimization",
                    "Problem Solving",
                    "Back-end Integration",
                    "Responsive Design",
                    "AI Integration",
                    "Project Management",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm border border-blue-700/30 rounded-lg p-2 hover:from-blue-800/40 hover:to-blue-700/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="block text-blue-400 text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional details with staggered animation - more concise text */}
          <div className="mt-6 space-y-4">
            {[
              "I bring hands‑on back‑end development experience to every project, ensuring a complete, integrated approach.",
              "Fueled by passion for technology and design, my career is a journey of learning and innovation. I've collaborated with diverse teams to push the boundaries of web development.",
              "I'm eager to connect with like‑minded professionals to transform ideas into captivating digital realities.",
            ].map((paragraph, index) => (
              <p
                key={index}
                className={`text-base leading-relaxed transition-all duration-1000 transform ${
                  isVisible ? "opacity-100" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                {paragraph}
              </p>
            ))}

            <div
              className={`transition-all duration-1000 transform ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1400ms" }}
            >
              <Link
                href="/contact"
                className="inline-block mt-6 py-2 px-6 bg-gradient-to-r from-blue-600 to-blue-800 
                          text-white rounded-full text-sm font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40
                          transition-all duration-300 hover:translate-y-[-2px]"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Add these styles to your global CSS or use in-page styles */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes pulse-fast {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulse-medium {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-pulse-fast {
          animation: pulse-fast 1s infinite;
        }

        .animate-pulse-medium {
          animation: pulse-medium 1.5s infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>

      {/* Background particles matching index page */}
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
    </div>
  );
}
