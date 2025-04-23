import { useState, useEffect } from "react";
import {
  // Common & Frameworks
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiPostgresql,
  SiOpenai,
  SiNextdotjs,
  SiSvelte,
  SiAdobe,
  SiDocker,
  SiTailwindcss,
  SiFirebase,
  SiExpo,
  SiVercel,
  SiGit,
  SiGithub,
  SiShopify,
  SiFigma,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaTint,
  FaServer,
  FaWordpress,
  FaGoogle,
} from "react-icons/fa";
import Image from "next/image";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return { position, isMobile };
}

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const { position: mousePosition, isMobile } = useMousePosition();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps" },
    { id: "cms", name: "CMS & E-Commerce" },
    { id: "design", name: "Design & AI Tools" },
  ];

  // Tech items with categories and proficiency levels
  const techItems = [
    // Frontend
    {
      title: "JavaScript",
      Icon: SiJavascript,
      color: "#F7DF1E",
      categories: ["frontend"],
      proficiency: 95,
    },
    {
      title: "TypeScript",
      Icon: SiTypescript,
      color: "#3178C6",
      categories: ["frontend"],
      proficiency: 90,
    },
    {
      title: "React",
      Icon: FaReact,
      color: "#61DBFB",
      categories: ["frontend"],
      proficiency: 95,
    },
    {
      title: "Next.js",
      Icon: SiNextdotjs,
      color: "#FFFFFF",
      categories: ["frontend"],
      proficiency: 90,
    },
    {
      title: "React Native",
      Icon: FaReact,
      color: "#61DBFB",
      categories: ["frontend"],
      proficiency: 85,
    },
    {
      title: "Tailwind CSS",
      Icon: SiTailwindcss,
      color: "#38BDF8",
      categories: ["frontend"],
      proficiency: 95,
    },
    {
      title: "Svelte",
      Icon: SiSvelte,
      color: "#FF3E00",
      categories: ["frontend"],
      proficiency: 75,
    },
    {
      title: "Expo",
      Icon: SiExpo,
      color: "#000000",
      categories: ["frontend"],
      proficiency: 80,
    },

    // Backend
    {
      title: "Node.js",
      Icon: FaNodeJs,
      color: "#68A063",
      categories: ["backend"],
      proficiency: 90,
    },
    {
      title: "Python",
      Icon: FaPython,
      color: "#FFD845",
      categories: ["backend"],
      proficiency: 80,
    },
    {
      title: "GraphQL",
      Icon: SiGraphql,
      color: "#E10098",
      categories: ["backend", "database"],
      proficiency: 85,
    },

    // Database
    {
      title: "PostgreSQL",
      Icon: SiPostgresql,
      color: "#336791",
      categories: ["database"],
      proficiency: 85,
    },
    {
      title: "SQL & NoSQL",
      Icon: FaDatabase,
      color: "#4DB33D",
      categories: ["database"],
      proficiency: 90,
    },

    // DevOps & Cloud
    {
      title: "Docker",
      Icon: SiDocker,
      color: "#0db7ed",
      categories: ["devops"],
      proficiency: 80,
    },
    {
      title: "AWS",
      Icon: FaAws,
      color: "#FF9900",
      categories: ["devops"],
      proficiency: 85,
    },
    {
      title: "Google Cloud",
      Icon: FaGoogle,
      color: "#4285F4",
      categories: ["devops"],
      proficiency: 80,
    },
    {
      title: "Vercel",
      Icon: SiVercel,
      color: "#000000",
      categories: ["devops"],
      proficiency: 95,
    },
    {
      title: "Firebase",
      Icon: SiFirebase,
      color: "#FFCA28",
      categories: ["devops", "database"],
      proficiency: 90,
    },
    {
      title: "Git",
      Icon: SiGit,
      color: "#F05032",
      categories: ["devops"],
      proficiency: 95,
    },
    {
      title: "GitHub",
      Icon: SiGithub,
      color: "#181717",
      categories: ["devops"],
      proficiency: 95,
    },

    // CMS & E-Commerce
    {
      title: "WordPress",
      Icon: FaWordpress,
      color: "#21759B",
      categories: ["cms"],
      proficiency: 90,
    },
    {
      title: "Shopify",
      Icon: SiShopify,
      color: "#7AB55C",
      categories: ["cms"],
      proficiency: 85,
    },
    {
      title: "Liquid",
      Icon: FaTint,
      color: "#00ced1",
      categories: ["cms"],
      proficiency: 85,
    },
    {
      title: "PlatformOS",
      Icon: "/icons/platformos.png",
      categories: ["cms"],
      proficiency: 80,
      isImage: true,
    },
    {
      title: "SmartyrDXP",
      Icon: "/icons/smartyr.svg",
      categories: ["cms"],
      proficiency: 75,
      isImage: true,
    },

    // Design & Tools
    {
      title: "Adobe Suite",
      Icon: SiAdobe,
      color: "#FF0000",
      categories: ["design"],
      proficiency: 90,
    },
    {
      title: "Figma",
      Icon: SiFigma,
      color: "#F24E1E",
      categories: ["design"],
      proficiency: 85,
    },
    {
      title: "OpenAI",
      Icon: SiOpenai,
      color: "#8A63D2",
      categories: ["design"],
      proficiency: 90,
    },
    {
      title: "Cursor AI",
      Icon: "/icons/cursor.png",
      categories: ["design"],
      proficiency: 90,
      isImage: true,
    },
    {
      title: "V0",
      Icon: "/icons/v0.png",
      categories: ["design"],
      proficiency: 80,
      isImage: true,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? techItems
      : techItems.filter((item) => item.categories.includes(activeCategory));

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900/30 flex flex-col text-gray-300">
      {/* Custom cursor follower - hidden on mobile */}
      {!isMobile && (
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

      {/* Background particles for visual interest */}
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

      <main className="flex-1 max-w-6xl mx-auto px-4 pt-12 w-full flex items-center justify-center overflow-hidden">
        <div className="w-full flex flex-col items-center">
          {/* Header section with animated entry - consistent positioning */}
          <div
            className={`transition-all duration-1000 transform mb-4 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-2xl sm:text-5xl font-bold mb-2 py-3 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Technology Stack
            </h1>
            <div className="w-16 h-1 bg-blue-500 mb-12"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4 text-sm">
              Technologies I've mastered to create responsive, innovative
              experiences.
            </p>

            {/* Category filter tabs - more compact */}
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tech grid with fixed height container to maintain position */}
          <div
            className="h-[55vh] overflow-y-auto w-full mx-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {filteredItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-lg p-3 
                    hover:from-gray-800/80 hover:to-gray-800/60 hover:border-blue-700/50 transition-all duration-300 transform hover:-translate-y-1
                    transition-all duration-1000 ${
                      isVisible ? "opacity-100" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <div className="flex items-center">
                    {item.isImage ? (
                      <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center mr-2 backdrop-blur-sm">
                        <Image
                          src={item.Icon}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center mr-2"
                        style={{ backgroundColor: `${item.color}25` }}
                      >
                        <item.Icon
                          className="text-xl"
                          style={{ color: item.color }}
                        />
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-200">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
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
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-y-auto {
          -ms-overflow-y-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
