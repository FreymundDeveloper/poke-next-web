import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import Head from "next/head";

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>Poke-Next Web</title>
            </Head>
            <Navbar />
            <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}