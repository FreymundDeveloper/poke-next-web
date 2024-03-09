import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
    return (
        <nav>
            <div>
                <Image src="/images/pokeball.png" width="40" height="40" alt="Poke-Next"/>
                <h1>Poke-Next</h1>
            </div> 
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
            </ul>
        </nav>
    )
}