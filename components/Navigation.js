import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Define nav links; you can customize as needed
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tech Stack", path: "/techstack" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Toggle the mobile sidebar menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Use fixed positioning on mobile and sticky on md+ */}
      <header className="w-full bg-[#111] py-4 z-[1000] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
          {/* Logo / Branding */}
          <div className="logo">
            <Link
              href="/"
              className="font-[Poppins] text-xl font-extralight text-white hover:text-blue-500 transition-colors duration-300 ease-in-out"
              aria-label="Go to Home"
            >
              Rafael Feliciano
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex list-none m-0 p-0">
              {navLinks.map((link) => {
                // Use an active check that supports nested routes (except for the home page)
                const isActive =
                  link.path === "/"
                    ? router.asPath === "/"
                    : router.asPath.startsWith(link.path);
                return (
                  <li key={link.path} className="ml-8">
                    <Link
                      href={link.path}
                      className={`no-underline transition-colors duration-300 ease-in-out ${
                        isActive
                          ? "text-blue-500"
                          : "text-white hover:text-blue-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social Icons & Hamburger Button for Mobile */}
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/rafaelfelic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white text-3xl mr-4 xs:mr-6 md:text-2xl md:mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/RafaelFelic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white text-3xl mr-4 xs:mr-6 md:text-2xl md:mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:rafaelfelic@gmail.com"
              aria-label="Email"
              className="text-white text-3xl mr-4 xs:mr-6 md:text-2xl md:mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            {/* Hamburger button always shows the bars icon */}
            <button
              onClick={toggleMenu}
              className="text-white text-3xl transition-colors duration-300 ease-in-out md:hidden"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 md:hidden z-[1050] backdrop-blur-xs transition-opacity duration-500"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Sidebar (80% width, sliding in from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-blue-900 rounded-l-3xl transform transition-transform duration-300 ease-in-out md:hidden z-[1100] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside sidebar */}
        <div className="flex items-center justify-end p-4">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white text-3xl transition-colors duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Mobile nav links with increased font size and gap */}
        <nav>
          <ul className="flex flex-col list-none px-12 text-3xl">
            {navLinks.map((link) => {
              // Use the same logic for mobile navigation links
              const isActive =
                link.path === "/"
                  ? router.asPath === "/"
                  : router.asPath.startsWith(link.path);
              return (
                <li key={link.path} className="my-8">
                  <Link
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`no-underline transition-colors duration-300 ease-in-out ${
                      isActive ? "text-blue-400 font-bold" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
