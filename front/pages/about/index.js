import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/about.module.css';
import Navbar from '../../components/navbar';

export default function About()
{
    return (
        <div className={styles.container}>
            <Head>
            <title>About</title>
            </Head>
            <main className={styles.main_container}>
                
                <h1>About Incognito Search</h1>
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

        </div>



    )
}