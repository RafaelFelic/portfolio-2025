import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Lock or unlock body scroll based on menuOpen state
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup in case the component unmounts on open sidebar
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define nav links; you can customize as needed
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tech Stack", path: "/techstack" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/portfolio" },
  ];

  // Toggle the mobile sidebar menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Use fixed positioning with smooth transition effects */}
      <header
        className={`fixed w-full py-3 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg shadow-blue-900/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
          {/* Logo / Branding with animated gradient */}
          <div className="logo">
            <Link
              href="/"
              className="font-light text-xl md:text-2xl relative group"
              aria-label="Go to Home"
            >
              <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent transition-all duration-300 ease-in-out">
                Rafael Feliciano
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Navigation with animated underline and glow effect */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 list-none m-0 p-0">
              {navLinks.map((link) => {
                // Use an active check that supports nested routes (except for the home page)
                const isActive =
                  link.path === "/"
                    ? router.asPath === "/"
                    : router.asPath.startsWith(link.path);

                return (
                  <li key={link.path} className="relative">
                    <Link
                      href={link.path}
                      className={`relative px-2 py-1 text-base font-medium transition-all duration-300 ease-in-out ${
                        isActive
                          ? "text-blue-400"
                          : "text-white/80 hover:text-white"
                      }`}
                      onMouseEnter={() => setHoveredLink(link.path)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {link.name}

                      {/* Animated underline */}
                      <span
                        className={`absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out ${
                          isActive ? "w-full" : "w-0"
                        } ${
                          hoveredLink === link.path && !isActive ? "w-full" : ""
                        }`}
                      ></span>

                      {/* Glow effect for active link */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-md bg-blue-500/10 blur-sm -z-10"></span>
                      )}
                    </Link>
                  </li>
                );
              })}

              {/* CTA Button */}
              <li>
                <Link
                  href="/contact"
                  className="py-2 px-4  border-2 border-gray-300 text-gray-300 rounded-full text-base font-medium transition-all duration-300 hover:bg-gray-300 hover:text-blue-600 "
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Icons & Hamburger Button for Mobile */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4 mr-6">
              <a
                href="https://www.linkedin.com/in/rafaelfelic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-blue-400 text-xl transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/RafaelFelic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/70 hover:text-blue-400 text-xl transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:rafaelfelic@gmail.com"
                aria-label="Email"
                className="text-white/70 hover:text-blue-400 text-xl transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>

            {/* Modern hamburger button */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/10 text-white text-xl transition-all duration-300 ease-in-out hover:bg-blue-600/20 md:hidden"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay with blur effect */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-[1050] transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Sidebar with modern styling and animations */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-gradient-to-b from-blue-900/90 to-black/95 backdrop-blur-lg rounded-l-2xl transform transition-transform duration-500 ease-in-out md:hidden z-[1100] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between px-6 py-8 border-b border-blue-800/30">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-light text-xl"
          >
            <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
              Rafael Feliciano
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 text-white text-xl transition-all duration-300"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Mobile nav links with modern styling and staggered animations */}
        <nav className="mt-8">
          <ul className="flex flex-col list-none px-8">
            {navLinks.map((link, index) => {
              const isActive =
                link.path === "/"
                  ? router.asPath === "/"
                  : router.asPath.startsWith(link.path);

              return (
                <li
                  key={link.path}
                  className="my-5 transform transition-all duration-300 ease-out"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-2xl font-light transition-colors duration-300 ${
                      isActive
                        ? "text-blue-400 font-normal"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <div className="w-12 h-0.5 bg-blue-500 mt-1"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social media icons in mobile menu */}
        <div className="absolute bottom-12 left-0 w-full px-8">
          <div className="flex items-center justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/rafaelfelic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-blue-400 text-2xl transition-transform duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/RafaelFelic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/70 hover:text-blue-400 text-2xl transition-transform duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:rafaelfelic@gmail.com"
              aria-label="Email"
              className="text-white/70 hover:text-blue-400 text-2xl transition-transform duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
