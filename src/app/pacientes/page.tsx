
import NavegacaoUser from "../ui/nav/navegacaoUser";

const paciente = () => {

    return (
        <>
            <div className="grid grid-cols-[17rem_1fr_23.75rem]">
                {/** Navegação do usuário */}
                <NavegacaoUser/>
            </div>
        </>
    )
}

export default paciente;