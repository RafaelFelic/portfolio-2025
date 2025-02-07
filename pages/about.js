import Head from "next/head";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-6 py-20 min-h-screen select-text text-sm">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me and my work" />
      </Head>

      <main className="w-full flex flex-col lg:flex-row gap-16 items-center">
        {/* Profile Section */}
        <div className="lg:w-1/3 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative h-72 w-72 rounded-2xl bg-gray-800 overflow-hidden">
              <img
                src="/images/rafael-surfing.webp"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full bg-gray-700 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 space-y-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h1>

          <section className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-100">
                Rafael, Web Developer
              </h2>
              <p className="text-base leading-loose text-gray-300">
                I specialize in crafting immersive digital experiences through
                front-end development and UX/UI design. With a passion for
                merging aesthetic vision with technical precision, I create web
                solutions that are both visually stunning and functionally
                robust.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-100 border-l-4 border-blue-500 pl-4">
                Expertise
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Front-end Development</span>
                </li>
                {/* Repeat for other list items with different blue accents if needed */}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-100 border-l-4 border-blue-500 pl-4">
                Professional Journey
              </h3>
              <p className="text-base leading-loose text-gray-300">
                [Engaging story about your career path, key milestones, and
                professional philosophy. Keep it concise but impactful.]
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-100 border-l-4 border-blue-500 pl-4">
                Let's Collaborate
              </h3>
              <p className="text-base leading-loose text-gray-300">
                I'm currently available for select projects and consultation
                work. Reach out via{" "}
                <a
                  href="mailto:rafaelfelic@gmail.com"
                  className="text-blue-400 hover:text-blue-500 transition underline underline-offset-4 inline-block"
                >
                  rafaelfelic@gmail.com
                </a>{" "}
                to discuss your vision.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
