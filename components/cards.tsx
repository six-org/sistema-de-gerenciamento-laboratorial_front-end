import React, { Children } from "react"



type card_1 = {
    titulo: string,
    texto: string,
    
}
export const Card_1 = ({titulo, texto, children}: card_1 &{children?:React.ReactNode}) =>{
    return(
        <>
            <div className="border-[1px] border-solid border-neutral-pure/20 rounded-[.5rem] bg-white pb-[.5rem]">
                {/* header do card */}
                <div className="w-full p-[1rem_.75rem]">
                    <h6 className="text-[1.125rem] font-semibold text-[#23272E]">
                        {titulo}
                    </h6>
                    <p className="mt-[0.125rem] text-[.875rem] text-[#8B909A]">
                        {texto}
                    </p>
                </div>

                {/* conteúdo do card */}
                <div className="px-[.75rem]">
                    {children}
                </div>
            </div>
        </>
    )
}