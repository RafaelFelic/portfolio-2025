import React, { useState, useEffect } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPaperPlane,
  faUser,
  faSubject,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => window.removeEventListener("mousemove", setFromEvent);
  }, []);

  return position;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Notification state for showing feedback messages in a modal
  const [notification, setNotification] = useState({
    visible: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setNotification({
          visible: true,
          type: "success",
          message: "Thank you for reaching out! I'll get back to you soon.",
        });
        // Clear the form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setNotification({
          visible: true,
          type: "error",
          message: "There was an error sending your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        visible: true,
        type: "error",
        message: "There was an error sending your message. Please try again.",
      });
    }

    // Hide the notification modal automatically after 3 seconds
    setTimeout(() => {
      setNotification({ visible: false, type: "", message: "" });
    }, 10000);
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900/30 flex flex-col text-gray-300">
      <Head>
        <title>Contact - Rafael | Web Developer</title>
        <meta
          name="description"
          content="Get in touch with Rafael for web development projects, collaborations, or any inquiries."
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

      {/* Background particles */}
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

      {/* Modal Notification Component */}
      {notification.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div
            className={`w-11/12 max-w-md p-6 rounded-xl shadow-lg transition-all duration-500 transform ${
              notification.type === "success"
                ? "bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500/30"
                : "bg-gradient-to-br from-red-600 to-red-800 border border-red-500/30"
            } backdrop-blur-sm scale-100`}
          >
            <h3 className="text-xl font-semibold text-white text-center mb-4">
              {notification.type === "success" ? "Message Sent!" : "Error"}
            </h3>
            <p className="text-white text-center mb-6">
              {notification.message}
            </p>
            <button
              type="button"
              onClick={() =>
                setNotification({ visible: false, type: "", message: "" })
              }
              className="w-full bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-0 w-full flex items-center justify-center overflow-hidden">
        <div className="w-full">
          {/* Header section with animated entry */}
          <div
            className={`transition-all duration-1000 transform mb-8 text-center ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">
              Have a project in mind or just want to say hello? I'd love to hear
              from you!
            </p>
          </div>

          {/* Contact Section with glass morphism */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 transform ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Left Side: Info card */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/40 backdrop-blur-sm border border-blue-800/30 rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-blue-300 mb-4">
                  Let's Work Together
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you're looking for a new website, a landing page to
                  boost conversions, or a mobile application, I'm here to help
                  turn your vision into reality. I combine best practices in
                  UX/UI and performance optimization to create solutions that
                  deliver results.
                </p>
                <p className="text-gray-300 mb-4">
                  You can also reach me directly via:
                </p>
              </div>

              {/* Social links with animated hover effects */}
              <div className="flex justify-center md:justify-start space-x-6 mt-4">
                <a
                  href="https://www.linkedin.com/in/rafaelfelic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-4 rounded-full border border-blue-700/30 text-2xl text-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/RafaelFelic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-4 rounded-full border border-blue-700/30 text-2xl text-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="mailto:rafaelfelic@gmail.com"
                  aria-label="Email"
                  className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-4 rounded-full border border-blue-700/30 text-2xl text-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-300 mb-6">
                Send a Message
              </h2>

              {/* Name field */}
              <div className="mb-4 relative">
                <div className="absolute left-3 top-3 text-blue-400">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition-all duration-300"
                />
              </div>

              {/* Email field */}
              <div className="mb-4 relative">
                <div className="absolute left-3 top-3 text-blue-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition-all duration-300"
                />
              </div>

              {/* Subject field */}
              <div className="mb-4 relative">
                <div className="absolute left-3 top-3 text-blue-400">
                  <FontAwesomeIcon icon={faSubject} />
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition-all duration-300"
                />
              </div>

              {/* Message field */}
              <div className="mb-6 relative">
                <div className="absolute left-3 top-3 text-blue-400">
                  <FontAwesomeIcon icon={faComment} />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 text-white border border-gray-700 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition-all duration-300"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg shadow-blue-800/30 hover:shadow-blue-700/40 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-1"
              >
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
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
      `}</style>
    </div>
  );
}
