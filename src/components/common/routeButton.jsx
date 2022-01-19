import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function RouteButton (props){

    const router = useRouter();

    const {
        label,
        href=router.pathname,
        active=true,
        className="",
    } = props

    let buttonClass = active ? "button primary" : "button primary disabled"
    let buttonHref = active ? href : router.pathname

    return(
        <div className={className}>
            <Link href={buttonHref}>
                <a 
                    className={buttonClass}
                >
                    {label}
                </a>
            </Link>
        </div>
    )
}