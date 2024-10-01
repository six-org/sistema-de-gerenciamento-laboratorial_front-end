


import { CgDanger } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";

type card_notificacao = {
    id?: string,
    status:boolean,
    titulo:string,
}

const Card_Notificacao = (props:card_notificacao) =>{
    return(
        <>
            <div className="flex items-center gap-[.5rem]">
                {(props.status)?<FaRegCheckCircle className="text-success h-[1.5rem] w-[1.5rem]" />:<CgDanger className="text-error h-[1.5rem] w-[1.5rem]" />}
                
                <p className="text-[#71717A] text-[.75rem]">{props.titulo}</p>
            </div>
        </>
    )
}

export default Card_Notificacao;