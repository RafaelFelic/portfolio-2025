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
            w-full h-full opacity-80 object-cover block
            [clip-path:polygon(50%_0%,79.39%_9.55%,97.56%_34.55%,97.56%_65.45%,79.39%_90.45%,50%_100%,20.61%_90.45%,2.44%_65.45%,2.44%_34.55%,20.61%_9.55%)]
          "
          src="/images/rafael.webp"
          alt="Rafael's profile picture"
        />
      </div>

      <div className="relative z-20 text-center text-white !mt-8">
        <h1 className="font-poppins text-5xl !mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#287cf4] via-[#00aaff] to-[#b3e0ff] bg-clip-text text-transparent font-semibold text-6xl">
            My Portfolio
          </span>
        </h1>

        <p className="text-xl font-light">
          Discover my projects and skills in <strong>web development</strong>{" "}
          and <strong>UX/UI design</strong>.
        </p>
        <a
          href="/about"
          className="
            inline-block !py-3 !px-8 !mt-10
            bg-[#287cf4] text-white   
            rounded-full border  font-medium
            transition duration-500 ease-out
            hover:bg-[#114f94] 
          "
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
