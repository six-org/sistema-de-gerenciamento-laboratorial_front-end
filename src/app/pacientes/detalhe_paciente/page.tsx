"use client"

import NavegacaoUser from "../../../../components/navegacaoUser";

const detalhe_paciente = () => {

    return (
        <>
            <div className="grid grid-cols-[17rem_1fr_23.75rem]">
                {/** Navegação do usuário */}
                <NavegacaoUser/>
            </div>
        </>
    )
}

export default detalhe_paciente;