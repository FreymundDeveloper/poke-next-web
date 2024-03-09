import Link from "next/link"
import Image from "next/image"

import styles from '../../styles/Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="30" height="30" alt="Poke-Next"/>
                <h1>Poke-Next</h1>
            </div> 
            <ul className={styles.link_items}>
                <li>
                    <Link href="/" className={styles.links}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.links}>About</Link>
                </li>
            </ul>
        </nav>
    )
}