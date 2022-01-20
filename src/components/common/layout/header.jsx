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
                <div
                    className="grid-x align-middle text-center" 
                    style={{
                        minHeight:"110px", 
                        background: "rgb(2,0,36)", 
                        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                        marginBottom: "4ch"
                    }}
                >
                    <div className="cell small-12" style={{color:"whitesmoke"}}>
                        <Link href="/riskProfiler" passHref>
                            <h1 style={{marginBottom:"0px", cursor:"pointer"}}>Financial Advisor</h1>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}