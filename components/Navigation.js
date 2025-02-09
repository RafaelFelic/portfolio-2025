import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Example nav items: Feel free to customize labels/paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tech Stack", path: "/techstack" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Toggle the mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#111] py-4 z-[1000] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
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

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.path;
              return (
                <li key={link.path} className="ml-8">
                  <Link
                    href={link.path}
                    className={`text-white no-underline transition-colors duration-300 ease-in-out hover:text-blue-500 
                      ${isActive ? "text-blue-500" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social icons (always visible) */}
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/rafaelfelic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white text-2xl mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/RafaelFelic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white text-2xl mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="mailto:rafaelfelic@gmail.com"
            aria-label="Email"
            className="text-white text-2xl mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="text-white text-2xl transition-colors duration-300 ease-in-out md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav (shown when menuOpen=true) */}
      {menuOpen && (
        <nav className="bg-[#111] md:hidden">
          <ul className="flex flex-col list-none p-4">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.path;
              return (
                <li key={link.path} className="my-2">
                  <Link
                    href={link.path}
                    className={`block text-white no-underline py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-[#222] 
                      ${isActive ? "text-blue-500" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
