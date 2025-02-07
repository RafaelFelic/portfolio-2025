import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen  text-gray-300 flex flex-col items-center justify-center font-light">
      <Head>
        <title>About Me - Rafael | Web Developer</title>
        <meta
          name="description"
          content="Discover the digital journey of Rafael, a passionate web developer specializing in front-end and UX/UI design. Learn more about my work and vision."
        />
      </Head>

      <div className="max-w-5xl w-full px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Top Section: Photo on the left & two paragraphs on the right */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Photo */}
          <div className="relative group w-full md:w-1/4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative h-60 w-56 rounded-2xl bg-gray-800 overflow-hidden">
              <img
                src="/images/rafael-black-shirt.webp"
                alt="Rafael wearing a surfing shirt"
                className="w-full h-full object-cover brightness-80"
              />
            </div>
          </div>

          {/* Introductory Text */}
          <div className="flex flex-col gap-4 w-full md:w-3/4">
            <p className="text-lg leading-relaxed">
              <span className="font-bold">
                Hi, I'm Rafael – a Web Developer and UX/UI Designer.
              </span>
              <br />I create immersive digital experiences that connect users
              with innovative, responsive, and pixel‑perfect interfaces. My work
              brings together visual appeal and technical expertise for seamless
              experiences on every device(mobile to desktops).
            </p>
            <p className="text-lg">My skill set spans:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center text-lg leading-relaxed">
                <span className="inline-block bg-blue-500 h-2.5 w-2.5 rounded-full mr-3"></span>
                Responsive front‑end development
              </li>
              <li className="flex items-center text-lg leading-relaxed">
                <span className="inline-block bg-blue-500 h-2.5 w-2.5 rounded-full mr-3"></span>
                Innovative UX/UI design
              </li>
              <li className="flex items-center text-lg leading-relaxed">
                <span className="inline-block bg-blue-500 h-2.5 w-2.5 rounded-full mr-3"></span>
                Performance optimization
              </li>
              <li className="flex items-center text-lg leading-relaxed">
                <span className="inline-block bg-blue-500 h-2.5 w-2.5 rounded-full mr-3"></span>
                Creative problem solving
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Additional details */}
        <div className="mt-6 space-y-6">
          <p className="text-lg leading-relaxed">
            Additionally, I have hands‑on back‑end development experience for a
            complete, integrated approach to every project.
          </p>
          <p className="text-lg leading-relaxed">
            Fueled by a relentless passion for technology and design, my career
            is an exciting journey of learning, innovation, and collaboration.
            Over the years, I've teamed up with diverse groups to overcome
            complex challenges and push the boundaries of what's possible in web
            development.
          </p>
          <p className="text-lg leading-relaxed">
            I'm always eager to connect with like‑minded professionals to
            transform visionary ideas into captivating digital realities.
            Whether you're looking for a creative partner or expert
            consultation, feel free to{" "}
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-500 underline underline-offset-4 transition"
            >
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
