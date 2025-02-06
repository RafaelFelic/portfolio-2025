import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me and my work" />
      </Head>

      <main className={styles.main}>
        <h1>About Me</h1>

        <section className={styles.content}>
          <h2>Hello, I'm Rafael</h2>
          <p>
            I'm a passionate Web Developer with a strong focus on Front-end
            development and UX/UI. I specialize in creating engaging,
            user-friendly web experiences that combine aesthetic design with
            functional implementation.
          </p>

          <h3>What I Do</h3>
          <p>I focus on delivering high-quality solutions in:</p>
          <ul>
            <li>Front-end Development</li>
            <li>Responsive Web Design</li>
            <li>User Experience (UX) Design</li>
            <li>User Interface (UI) Development</li>
          </ul>

          <h3>My Journey</h3>
          <p>
            [Share a brief story about your professional journey, what drives
            you, and what you're passionate about. Make it personal and
            engaging.]
          </p>

          <h3>Let's Connect</h3>
          <p>
            I'm always interested in new projects and opportunities. Feel free
            to reach out to me at [your preferred contact method].
          </p>
        </section>
      </main>
    </div>
  );
}
