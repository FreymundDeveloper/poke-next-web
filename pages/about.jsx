import Image from "next/image";

import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <h1>About</h1>
            <p>
                The Pokédex is every trainer's go-to gadget, packed with details about 
                all Pokémon species. From sizes to habitats, it's a compact encyclopedia at 
                your fingertips. With its easy-to-use interface, you can quickly look up 
                any Pokémon you encounter. Plus, it helps you in battles, highlighting 
                strengths and weaknesses. As you journey, you update your Pokédex, striving 
                to catch 'em all. It's not just a tool; it's a symbol of your mastery as 
                a Pokémon trainer. 
            </p>
            <p>
                And Poke-Next Web, well, it's exactly the same 
                tool but converted into a web page.
            </p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    )
}

export default About