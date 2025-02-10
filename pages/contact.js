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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    // e.g., call an API route to handle sending email or storing info
    console.log(formData);
    alert("Thank you for reaching out! I’ll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 inline-block text-transparent bg-clip-text mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300">
            Have a project in mind, or just want to say hello? Fill out the form
            below and I’ll get back to you as soon as possible.
          </p>
        </section>

        {/* Contact Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Info or Brand Statement */}
          <div className="flex flex-col justify-center bg-gray-800/70 rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
            <p className="text-gray-300 mb-12 leading-relaxed">
              Whether you’re looking for a new website, a landing page to boost
              conversions, or a mobile application to engage users on the go,
              I'm here to help turn your vision into a reality. I combine best
              practices in UX/UI and performance optimization to create
              solutions that stand out and deliver results.
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
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Email */}

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
  );
}
