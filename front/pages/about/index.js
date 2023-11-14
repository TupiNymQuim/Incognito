import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/about.module.css';
import Navbar2 from '../../components/navbar2';
import Link from 'next/link';

export default function About()
{
    return (
        <div className={styles.container}>
            <Head className={styles.header}>
            <title>About</title>
            <Navbar2></Navbar2>
            </Head>
            <main className={styles.main_container}>
                
                <h1>About Incognito Search</h1>
                    <p> 
                        Welcome to Incognito, where privacy meets innovation. As a Web3 private search engine based on blockchain, Incognito runs above the Nym mixnet, 
                        ensuring your searches remain truly private. We keep no track of users, prioritizing the confidentiality of both searches and metadata. 
                        While our current experience is free, Incognito is committed to becoming a paid service in the future, ensuring sustainable privacy for all. 
                        Welcome to the future of private search—welcome to Incognito, where your online presence remains untracked.
                    </p>
                <h1>Why protect your privacy?</h1>
                <p>
                    Firstly, because it is a fundamental right. 
                </p>
                <p>
                    Regardless of whether you are in a situation where guaranteeing your privacy is an alternative to censorship and/or political persecution, the right to privacy must be defended as a universal and general principle. 
                </p>
                <p>
                However, the benefits of privacy are not restricted to the political sphere. 
                </p>
                <p>
                Corporate surveillance watches your every move online in order to generate more market revenue. Violating privacy, selling your data, understanding and manipulating consumption patterns is an odious cycle on which most of the digital economy operates. However, navigating the internet no longer has to feel like being a lab rat, millimetrically observed at every step. 
                </p>
                <p>
                The internet is broken and, from the very beginning, it was not designed with privacy in mind.
                </p>
                <p>
                Fortunately, Incognito, operating on top of the Nym mixnet, offers a simple way to browse privately.
                </p>
                <h1>Meet TupiNymQuim </h1>
                <p>
                        Visit our <Link href="https://tupinymquim.github.io/" className={styles.website}>website</Link>
                </p>
            </main>
            <div className={styles.container_right}>

            </div>

        </div>



    )
}