import Head from "next/head";
import styles from "./styles.module.css";
import Navbar from "@/components/Navbar/navbar";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <title>About</title>
      </Head>
      <Navbar type="About" />
      <main className={styles.main_container}>
        <h1>About Incognito Search</h1>
        <p>
          We are a search tool focused on privacy. At Incognito Search, no
          content searched by users is shared with any third party.
        </p>
        <p>
          We don't log any information on user behavior. Unlike competitors, we
          don't see our users' data as products.
        </p>
        <p>
          Incognito Search runs on top of Nym Mixnet, the best platform for
          securing private Internet traffic; guaranteeing privacy in a
          decentralized infrastrucutre.
        </p>
        <h1>Why protect your privacy?</h1>
        <p>Firstly, because it is a fundamental right.</p>
        <p>
          Regardless of whether you are in a situation where guaranteeing your
          privacy is an alternative to censorship and/or political persecution,
          the right to privacy must be defended as a universal and general
          principle.
        </p>
        <p>
          However, the benefits of privacy are not restricted to the political
          sphere.
        </p>
        <p>
          Corporate surveillance watches your every move online in order to
          generate more market revenue. Violating privacy, selling your data,
          understanding and manipulating consumption patterns is an odious cycle
          on which most of the digital economy operates. However, navigating the
          internet no longer has to feel like being a lab rat, millimetrically
          observed at every step.
        </p>
        <p>
          The internet is broken and, from the very beginning, it was not
          designed with privacy in mind.
        </p>
        <p>
          Fortunately, Incognito, operating on top of the Nym mixnet, offers a
          simple way to search privately.
        </p>
        <h1>Meet TupiNymQuim </h1>
        <p>
          Visit our{" "}
          <Link
            href="https://tupinymquim.github.io/"
            className={styles.website}
          >
            website
          </Link>
        </p>
      </main>
    </div>
  );
}
