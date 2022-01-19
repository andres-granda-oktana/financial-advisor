import Link from "next/link"

export default function ActionButton (props){

    const {
        name,
        label,
        active=true,
        className="",
        onClick=undefined
    } = props

    let buttonClass = active ? "button primary" : "button primary disabled"

    return(
        <div className={className}>
            <a 
                name={name}
                className={buttonClass}
                onClick={ onClick ? (e)=>onClick(e) : null}
            >
                {label}
            </a>
        </div>
    )
}