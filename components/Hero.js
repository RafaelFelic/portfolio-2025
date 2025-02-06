import styles from "./Hero.module.css";
import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className={styles.hero}>
      <AnimatedBackground />
      <div className={styles.overlay}></div>
      <div className={styles.profileContainer}>
        <img
          className={styles.profilePic}
          src="/images/rafael.webp"
          alt="Rafael's profile picture"
        />
      </div>

      <div className={styles.content}>
        <h1>
          Welcome to <span className={styles.highlight}>My Portfolio</span>
        </h1>
        <p>
          Discover my projects and skills in <strong>web development</strong>{" "}
          and <strong>UX/UI design</strong>.
        </p>
        <a href="#about" className={styles.cta}>
          Learn More
        </a>
      </div>
      <footer className={styles.footer}>
        <p>© 2025 Rafael Feliciano. All rights reserved.</p>
      </footer>
    </section>
  );
}
