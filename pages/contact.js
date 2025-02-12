import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    <>
      {/* Modal Notification Component */}
      {notification.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div
            className={`w-11/12 max-w-md p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
              notification.type === "success" ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            <h3 className="text-xl font-semibold text-white text-center mb-4">
              {notification.type === "success" ? "Success" : "Error"}
            </h3>
            <p className="text-white text-center mb-6">
              {notification.message}
            </p>
            <button
              type="button"
              onClick={() =>
                setNotification({ visible: false, type: "", message: "" })
              }
              className="block mx-auto bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="h-auto md:h-[calc(var(--vh,1vh)*93)] flex flex-col items-center justify-center text-white pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 inline-block text-transparent bg-clip-text mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-300">
              Have a project in mind, or just want to say hello? Fill out the
              form below and I'll get back to you as soon as possible.
            </p>
          </section>

          {/* Contact Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Info or Brand Statement */}
            <div className="flex flex-col justify-center bg-gray-800/70 rounded-lg p-8">
              <h2 className="text-3xl font-semibold mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-300 mb-12 leading-relaxed">
                Whether you're looking for a new website, a landing page to
                boost conversions, or a mobile application to engage users on
                the go, I'm here to help turn your vision into a reality. I
                combine best practices in UX/UI and performance optimization to
                create solutions that stand out and deliver results.
              </p>
              <p className="text-gray-300 mb-4">
                Alternatively, you can reach me directly via:
              </p>
              <ul className="text-gray-300">
                <li className="flex items-center gap-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/rafaelfelic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white text-5xl mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://github.com/RafaelFelic"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-white text-5xl mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>

                  <a
                    href="mailto:rafaelfelic@gmail.com"
                    aria-label="Email"
                    className="text-white text-5xl mr-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Side: Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="border text-gray-300 rounded-lg shadow-lg p-8 flex flex-col justify-center"
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-200 text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* Email */}

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {/* Subject */}

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-200 text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-200 text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
