import React from "react";

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-gray-200 px-4 overflow-x-hidden">
      {/* Container */}
      <div className="max-w-6xl w-full mx-auto">
        {/* Page Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 inline-block text-transparent bg-clip-text mb-4">
            Services
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Here are the core services I offer. From modern, responsive websites
            to cross-platform apps, I'm dedicated to creating impactful digital
            experiences that help you stand out online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-2 px-2 md:px-4">
          {/* Service Cards - showing one as example, repeat for others */}
          <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="mb-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                Custom Websites
              </h2>
              <p className="text-gray-400 mb-3 line-height-relaxed">
                Engaging, responsive, and tailored to your brand. I build fast,
                SEO-friendly websites using modern frameworks.
              </p>
            </div>
            <button className="mt-auto w-fit inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm">
              Learn More
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Service 2: High-Converting Landing Pages */}
          <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="mb-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                High-Converting Landing Pages
              </h2>
              <p className="text-gray-400 mb-3 line-height-relaxed">
                Fuel your campaigns with landing pages optimized for clear CTAs
                and maximum conversions.
              </p>
            </div>
            <button className="mt-auto w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm">
              Learn More
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Service 3: Web Applications */}
          <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="mb-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                Web Applications
              </h2>
              <p className="text-gray-400 mb-3 line-height-relaxed">
                Scalable, secure, and feature-rich applications using React,
                Next.js, Node.js, and more.
              </p>
            </div>
            <button className="mt-auto w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm">
              Learn More
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Service 4: SEO-Focused Websites */}
          <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="mb-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                SEO-Focused Websites
              </h2>
              <p className="text-gray-400 mb-3 line-height-relaxed">
                Enhance visibility and drive organic traffic with solid on-page
                optimization and performance.
              </p>
            </div>
            <button className="mt-auto w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm">
              Learn More
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Service 5: Mobile Apps */}
          <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="mb-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                Mobile Apps
              </h2>
              <p className="text-gray-400 mb-3 line-height-relaxed">
                Cross-platform apps using React Native or Expo, delivering a
                seamless user experience on iOS and Android.
              </p>
            </div>
            <button className="mt-auto w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm">
              Learn More
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Service 6: Graphic Design */}
          <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 flex flex-col hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="mb-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                Graphic Design
              </h2>
              <p className="text-gray-400 mb-3 line-height-relaxed">
                Branding, logos, marketing materials, and more to elevate your
                visual identity and strengthen brand presence.
              </p>
            </div>
            <button className="mt-auto w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm">
              Learn More
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
