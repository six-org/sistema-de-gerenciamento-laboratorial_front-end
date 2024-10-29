


import { Button } from "@/components/ui/button";
import { CgDanger } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


type card_notificacao = {
    id?: string,
    status:boolean,
    titulo:string,
}


const Card_Notificacao = (props:card_notificacao) =>{
    return(
        <>
            <div className="flex items-center justify-between gap-[.5rem] border-solid border-[1px] border-[#E7E7E7] rounded-[.5rem] p-[1.125rem_1rem]">
                <div className="flex items-center gap-[.5rem]">
                    {(props.status)?<IoCheckmarkCircleOutline className="text-success h-[1.5rem] w-[1.5rem]" />:<CgDanger className="text-error h-[1.5rem] w-[1.5rem]" />}
                
                    <p className="text-[#71717A] text-[.75rem]">{props.titulo} {(props.id)?`- ${props.id}`:''}</p>
                </div>
                {
                    (props.status)
                        ?<Button className="bg-success hover:bg-[transparent] text-[#F8FAFC] hover:text-success p-[.25rem_.5rem] h-auto whitespace-nowrap border-solid border-[1px] border-success">Detalhe</Button>
                        :<Button className="bg-error hover:bg-[transparent] text-[#F8FAFC] hover:text-error p-[.25rem_.5rem] h-auto whitespace-nowrap border-solid border-[1px] border-error">Detalhe</Button>
                }

            </div>
        </>
    )
}

export default Card_Notificacao;