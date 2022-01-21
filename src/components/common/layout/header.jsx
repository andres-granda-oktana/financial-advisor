import Head from "next/head"
import Link from "next/link"

export default function Header (){
    return (
        <>
            <Head>
                <title>Financial Advisor</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className="flex-container align-center-middle headerPage">
                    <Link href="/riskProfiler" passHref>
                        <h1>Financial Advisor</h1>
                    </Link>
                </div>
            </header>
        </>
    )
}