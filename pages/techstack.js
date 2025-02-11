import {
  // Common & Frameworks
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiPostgresql,
  SiOpenai,
  SiNextdotjs,
  SiSvelte,
  SiAdobe,
  SiDocker,
  SiTailwindcss,
  SiFirebase,
  SiExpo,
  SiVercel,
  SiGit, // Newly imported Git icon
  SiGithub, // Newly imported GitHub icon
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaTint,
  FaServer,
  FaWordpress,
  FaGoogle,
} from "react-icons/fa";
import Image from "next/image";

export default function TechStack() {
  // Group categories into rows. Each inner array represents one row.
  const categoryRows = [
    [
      {
        name: "Languages & Frameworks",
        items: [
          { title: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
          { title: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
          { title: "Python", Icon: FaPython, color: "#FFD845" },
          { title: "Node.js", Icon: FaNodeJs, color: "#68A063" },
          { title: "React", Icon: FaReact, color: "#61DBFB" },
          { title: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
          { title: "React Native", Icon: FaReact, color: "#61DBFB" },
          { title: "Expo", Icon: SiExpo, color: "#000000" },
          { title: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
          { title: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
        ],
      },
    ],
    [
      {
        name: "Databases",
        items: [
          { title: "GraphQL", Icon: SiGraphql, color: "#E10098" },
          { title: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
          {
            title: "SQL & NoSQL",
            Icon: FaDatabase,
            color: "#4DB33D",
          },
        ],
      },
      {
        name: "DevOps & Cloud",
        items: [
          { title: "Docker", Icon: SiDocker, color: "#0db7ed" },
          { title: "AWS", Icon: FaAws, color: "#FF9900" },
          { title: "Google", Icon: FaGoogle, color: "#4285F4" },
        ],
      },
    ],
    [
      {
        name: "CMS & Templating",
        items: [
          { title: "Liquid", Icon: FaTint, color: "#00ced1" },
          { title: "WordPress", Icon: FaWordpress, color: "#21759B" },
          { title: "SmartyrDXP", Icon: "/icons/smartyr.svg", color: "#21759B" },
        ],
      },
      {
        name: "Platforms",
        items: [
          { title: "Vercel", Icon: SiVercel, color: "#000000" },
          { title: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
          {
            title: "PlatformOS",
            Icon: "/icons/platformos.png",
            color: "#66b3ff",
          },
        ],
      },
    ],
    [
      // New combined row with Version Control, AI & Tools, and Design
      {
        name: "Version Control",
        items: [
          { title: "Git", Icon: SiGit, color: "#F05032" },
          { title: "GitHub", Icon: SiGithub, color: "#181717" },
        ],
      },
      {
        name: "AI & Tools",
        items: [
          { title: "OpenAI", Icon: SiOpenai, color: "#8A63D2" },
          { title: "Cursor AI", Icon: "/icons/cursor.png", color: "#ff69b4" },
          { title: "V0", Icon: "/icons/v0.png", color: "#00FA9A" },
        ],
      },
      {
        name: "Design",
        items: [{ title: "Adobe", Icon: SiAdobe, color: "#FF0000" }],
      },
    ],
  ];

  return (
    <section className="flex items-center justify-center p-4 overflow-hidden pb-12 h-auto md:h-[calc(var(--vh,1vh)*93)]">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Page Title */}
        <h1 className="py-2 mb-4 text-center text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 inline-block text-transparent bg-clip-text">
          Technology Stack
        </h1>
        <p className="mb-6 text-gray-300 text-sm sm:text-base">
          Here are the technologies I've used in my projects.
        </p>

        {/* Render category rows */}
        <div className="flex flex-col gap-4 overflow-y-auto">
          {categoryRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap gap-4">
              {row.map((cat) => (
                <div
                  key={cat.name}
                  className={`w-full ${
                    cat.name === "Design"
                      ? "sm:w-[160px]"
                      : cat.name === "Version Control"
                      ? "sm:w-[390px]"
                      : "sm:flex-1"
                  } rounded-xl bg-gray-800/50 p-4 backdrop-blur-sm`}
                >
                  {/* Category Header */}
                  <h2 className="mb-3 text-xl font-semibold text-gray-100">
                    {cat.name}
                  </h2>

                  {/* Tech Items Grid */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {cat.items.map((item) => (
                      <SmallCard
                        key={item.title}
                        Icon={item.Icon}
                        title={item.title}
                        color={item.color}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmallCard({ Icon, title, color }) {
  return (
    <div className="group flex items-center space-x-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10 w-[150px] 2xl:w-[170px]">
      {typeof Icon === "string" ? (
        <Image
          src={Icon}
          alt={title}
          width={24}
          height={24}
          className="transition-transform group-hover:scale-110"
        />
      ) : (
        <Icon
          className="text-2xl transition-transform group-hover:scale-110"
          style={{ color }}
        />
      )}
      <span className="text-sm font-medium text-gray-200 group-hover:text-white">
        {title}
      </span>
    </div>
  );
}
