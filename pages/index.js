import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { portfolioCategories } from "../data/portfolioData";

const skills = [
  {
    label: "React",
    className: "bg-[#61DAFB]/15 text-[#61DAFB] ring-[#61DAFB]/30",
  },
  { label: "Next.js", className: "bg-white/10 text-white ring-white/25" },
  {
    label: "TypeScript",
    className: "bg-[#3178C6]/20 text-[#7EB3F0] ring-[#3178C6]/40",
  },
  {
    label: "Node.js",
    className: "bg-[#339933]/20 text-[#6BD46B] ring-[#339933]/40",
  },
  {
    label: "Tailwind",
    className: "bg-[#06B6D4]/15 text-[#22D3EE] ring-[#06B6D4]/30",
  },
  {
    label: "JavaScript",
    className: "bg-[#F7DF1E]/15 text-[#F7DF1E] ring-[#F7DF1E]/30",
  },
  {
    label: "UX/UI",
    className: "bg-purple-500/20 text-purple-300 ring-purple-400/40",
  },
  {
    label: "Full-Stack",
    className: "bg-blue-500/20 text-blue-300 ring-blue-400/40",
  },
  {
    label: "AI",
    className: "bg-fuchsia-500/20 text-fuchsia-300 ring-fuchsia-400/40",
  },
];

const specialtyCount = Object.keys(portfolioCategories).length;

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: specialtyCount, label: "Specialties" },
  { value: "100%", label: "Custom built" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/rafaelfelic/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/RafaelFelic", icon: faGithub, label: "GitHub" },
  { href: "mailto:rafaelfelic@gmail.com", icon: faEnvelope, label: "Email" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rafael Feliciano | Creative Developer</title>
        <meta
          name="description"
          content="Rafael Feliciano - Creative Developer building fast, custom websites and web applications with React, Next.js and TypeScript."
        />
      </Head>

      <section className="relative flex flex-1 flex-col overflow-hidden text-white">
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-8 px-6 py-4 short:gap-5 md:flex-row md:gap-16 md:px-10 md:py-6 short:md:gap-10">
          <div className="order-2 w-full md:order-1 md:w-3/5">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-200 opacity-0 backdrop-blur-sm animate-[fadeInScale_0.6s_ease-out_0.1s_forwards] sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new projects
              </span>

              <p className="mt-6 short:mt-3 text-base font-light text-blue-300/90 opacity-0 animate-[fadeInScale_0.6s_ease-out_0.2s_forwards] sm:text-lg">
                Hello, I&apos;m{" "}
                <span className="font-medium text-blue-200">Rafael</span>
              </p>

              <h1 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight opacity-0 animate-[fadeInScale_0.6s_ease-out_0.3s_forwards] sm:text-5xl md:text-7xl short:md:text-5xl">
                <span className="block text-white">Creative</span>
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <p className="mt-6 short:mt-3 max-w-xl text-base font-light leading-relaxed text-gray-300/90 opacity-0 animate-[fadeInScale_0.6s_ease-out_0.4s_forwards] sm:text-lg">
                Turning ideas into{" "}
                <span className="font-medium text-white">
                  amazing digital experiences
                </span>{" "}
                — fast, accessible and built to convert.
              </p>

              <div className="mt-7 short:mt-4 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-[fadeInScale_0.6s_ease-out_0.5s_forwards] md:justify-start">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:text-base"
                >
                  View Projects
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:text-base"
                >
                  Let&apos;s talk
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-gray-400 underline-offset-4 transition-colors duration-300 hover:text-blue-300 hover:underline sm:text-base"
                >
                  About me
                </Link>
              </div>

              <dl className="mt-8 short:mt-4 grid w-full max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 short:pt-3 opacity-0 animate-[fadeInScale_0.6s_ease-out_0.6s_forwards]">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <dt className="text-2xl font-bold text-white sm:text-3xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-wider text-gray-500 sm:text-xs">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 short:mt-3 flex items-center gap-5 opacity-0 animate-[fadeInScale_0.6s_ease-out_0.7s_forwards]">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="text-xl text-gray-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex w-full justify-center md:order-2 md:w-2/5">
            <div className="relative aspect-square w-[168px] animate-[fadeInScale_0.9s_ease-out] sm:w-[220px] md:w-[240px] short:md:w-[200px] xl:w-[300px] xl:[--orbit:200px] short:xl:w-[236px] short:xl:[--orbit:168px]">
              <div
                className="absolute inset-[-12%] rounded-full bg-[conic-gradient(from_0deg,rgba(59,130,246,0.5),rgba(34,211,238,0.5),rgba(147,51,234,0.5),rgba(59,130,246,0.5))] opacity-30 blur-2xl animate-[shimmer_8s_ease-in-out_infinite]"
                style={{ backgroundSize: "200% 200%" }}
              />
              <div className="absolute inset-[-6%] rounded-full border border-white/10" />
              <div className="absolute inset-[-18%] rounded-full border border-white/5" />

              <Link
                href="/about"
                aria-label="Learn more about Rafael"
                className="group relative block h-full w-full overflow-hidden rounded-full shadow-[0_0_70px_rgba(56,189,248,0.25)] ring-1 ring-blue-400/40 transition-transform duration-500 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <Image
                  src="/images/rafael-black-shirt.webp"
                  alt="Rafael Feliciano"
                  fill
                  priority
                  sizes="(max-width: 640px) 168px, (max-width: 768px) 220px, (max-width: 1280px) 240px, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
              </Link>

              <div className="pointer-events-none absolute inset-0 hidden xl:block">
                {skills.map((skill, i) => {
                  const angle = i * (360 / skills.length) - 90;
                  return (
                    <Link
                      key={skill.label}
                      href="/techstack"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--orbit)) rotate(${-angle}deg)`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                      className={`pointer-events-auto absolute left-1/2 top-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ring-1 backdrop-blur-md transition-colors duration-300 hover:brightness-125 ${skill.className}`}
                    >
                      {skill.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden border-t border-white/5 py-3 xl:hidden">
          <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-3 pr-3">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={`${skill.label}-${i}`}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ring-1 ${skill.className}`}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
