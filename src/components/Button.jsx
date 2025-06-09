import {Download} from "lucide-react"
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href){
        return (
            <a href={href} target={target} className={"btn btn-primary " + classes}>
                {label}
                <Download className="w-5 h-4.5 " />
                {icon ? 
                    <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                : undefined}
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary "+ classes}>
                {label}
                <Download className="w-5 h-4.5 " />
                {icon ? 
                    <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                : undefined}
            </button>
        )
    }
   
}

export default ButtonPrimary