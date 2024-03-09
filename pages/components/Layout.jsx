import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import Head from "next/head";

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>
            <Navbar />
            <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}