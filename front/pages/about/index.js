import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/about.module.css';
import Navbar2 from '../../components/navbar2';

export default function About()
{
    return (
        <div className={styles.container}>
        <div className={styles.left_space}></div>
            <Head>
            <title>About</title>
            <Navbar2></Navbar2>
            </Head>
            <main className={styles.main_container}>
                
                <h1>About Incognito Search</h1>
                    <p> 
                        Welcome to Incognito, where privacy meets innovation. As a Web3 private search engine based on blockchain, Incognito runs above the Nym mixnet, 
                        ensuring your searches remain truly private. We keep no track of users, prioritizing the confidentiality of both searches and metadata. 
                        While our current experience is free, Incognito is committed to becoming a paid service in the future, ensuring sustainable privacy for all. 
                        Welcome to the future of private search—welcome to Incognito, where your online presence remains truly yours.
                    </p>
                <h1>Why</h1>
                <p>
                    Vestibulum bibendum lectus iaculis ligula pellentesque, 
                    nec elementum justo venenatis. Vestibulum tempor ex vitae 
                    massa sollicitudin ultrices nec gravida libero. Quisque nibh 
                    magna, blandit ac sapien nec, vulputate efficitur purus. Maecenas 
                    et dictum augue. Nunc in purus nisl. Vivamus fermentum ipsum sed 
                    enim ultricies lobortis. Vestibulum urna arcu, finibus at dignissim at, 
                    fringilla quis leo. Integer laoreet mi libero, vitae scelerisque orci 
                    eleifend vehicula. Nam iaculis egestas arcu a auctor. Proin commodo est 
                    et sapien hendrerit laoreet. Nullam volutpat, orci et ultrices lacinia, 
                    justo dui facilisis dui, vel pellentesque odio neque sed arcu. Aenean 
                    velit augue, pretium at pretium id, vulputate sit amet enim. Cras vitae 
                    dui pulvinar, egestas neque eu, egestas sem. Phasellus eget lorem eget 
                    ligula iaculis mollis quis id est. In nec nunc pharetra, varius tellus 
                    vitae, euismod eros.
                    </p>
                <h1>Meet TupiNymQuim </h1>
                <p>
                    Vestibulum bibendum lectus iaculis ligula pellentesque, 
                    nec elementum justo venenatis. Vestibulum tempor ex vitae 
                    massa sollicitudin ultrices nec gravida libero. Quisque nibh 
                    magna, blandit ac sapien nec, vulputate efficitur purus. Maecenas 
                    et dictum augue.
                    </p>
            </main>
            <div className={styles.container_right}>

            </div>

        </div>



    )
}