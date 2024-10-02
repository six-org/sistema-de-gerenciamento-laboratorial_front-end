
import { ReactNode } from "react";

/* Fonte */
import { Nunito_Sans } from "next/font/google";

type card_result = {
    titulo: string,
    porcentagem: number,
    numero: number,
    icone: ReactNode,
    color: string,
}

const nunitoSans = Nunito_Sans({subsets:["latin"]});

const Card_Resultado = (props:card_result) => {
    
    return (
        <>
            <div className="border-[1px] border-solid border-[#E7E7E7] p-[1rem] rounded-[.5rem] w-full">
                <div style={{backgroundColor: props.color}} className={`h-[2.75rem] w-[2.75rem] rounded-[.875rem] flex items-center justify-center`}>
                    <div className="h-[2.25rem] w-[2.25rem] rounded-[.625rem] border-[3px] border-solid border-white flex items-center justify-center p-[.3rem]">
                        {props.icone}
                    </div>
                </div>
                <h4 className={`mt-[.25rem] text-[#637083] text-[.875rem] font-bold ${nunitoSans.className}`}>
                    {props.titulo}
                </h4>

                <div className="mt-[.25rem] flex items-center justify-between">
                    <p className={`text-[#141C25] text-[1.5rem] font-bold ${nunitoSans.className}`}>
                        {props.numero}
                    </p>

                    <p className="text-[#09090B] text-[.75rem] font-medium">
                        {props.porcentagem}%
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card_Resultado;