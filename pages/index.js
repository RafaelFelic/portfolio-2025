import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="relative z-20
          w-[200px] h-[200px] md:w-[250px] md:h-[250px]
          animate-[fadeInScale_1s_ease-out]"
      >
        <img
          className="
            w-full h-full opacity-90 object-cover block
            [clip-path:polygon(50%_0%,79.39%_9.55%,97.56%_34.55%,97.56%_65.45%,79.39%_90.45%,50%_100%,20.61%_90.45%,2.44%_65.45%,2.44%_34.55%,20.61%_9.55%)]
          "
          src="/images/rafael-office.webp"
          alt="Rafael's profile picture"
        />
      </div>

      <div className="relative z-20 text-center text-white !mt-2">
        <h1 className="text-5xl !mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent font-semibold text-6xl">
            My Portfolio
          </span>
        </h1>

        <p className="text-xl font-extralight">
          Discover my projects and skills in{" "}
          <span className="font-semibold">web development</span> and{" "}
          <span className="font-semibold">UX/UI design</span>.
        </p>
        <Link
          href="/about"
          className="
            inline-block !py-3 !px-8 !mt-6
            bg-gradient-to-r from-blue-200 to-blue-600 text-black   
            rounded-full font-semibold
            transition duration-500 ease-out
            hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 hover:text-white
          "
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
