
import NavegacaoUser from "../../../components/navegacaoUser";

/* Fonte */
import { Nunito_Sans } from "next/font/google";



/* Icones */
import { LuFileCheck } from "react-icons/lu";
import { ImSpinner6 } from "react-icons/im";
import { CgDanger } from "react-icons/cg";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

/* Componentes */
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"


import Item_Tabs from "./components/Busca/item_tabs";
import { Calendario } from "./components/Busca/Calendario";
import Card_Resultado from "./components/Resultado/Card_Resultado";
import Button_Lab from "./components/Button/Button_Lab";
import Card_Notificacao from "./components/Card/Card_Notificacao";


import { Card_1 } from "../../../components/cards";



const laboratorio = () => {


    return (
        <>
            <div className="grid grid-cols-[17rem_1fr_23.75rem]">
                {/** Navegação do usuário */}
                <NavegacaoUser />

                {/** Content da Página */}
                <div className="p-[3.625rem_0.625rem]">

                    <Input className="text-[#E4E4E7] hover:text-neutral-dark" type="text" placeholder="Buscar" />

                    <div className="flex items-center gap-[2rem] justify-between mt-[0.875rem]">

                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="flex items-center justify-start gap-[4px] border-[1px] border-[#E4E4E7] border-solid w-fit px-[.7rem]">
                                <Item_Tabs value={'diario'} titulo={'Diário'} />
                                <Item_Tabs value={'semanal'} titulo={'Semanal'} />
                                <Item_Tabs value={'mensal'} titulo={'Mensal'} />
                                <Item_Tabs value={'anual'} titulo={'Anual'} />
                            </TabsList>
                        </Tabs>

                        <Calendario />
                    </div>

                    <div className="mt-[2rem] flex flex-wrapper gap-[1.5rem] justify-between items-center">
                        <Card_Resultado color={'#10B9783D'} titulo={'Concluído'} numero={18} porcentagem={18} icone={<LuFileCheck className="h-full w-full text-[#10B978]" />} />
                        
                        <Card_Resultado color={'#4C61CD3D'} titulo={'Em andamento'} numero={11} porcentagem={18} icone={<ImSpinner6 className="h-full w-full text-[#4C61CD]" />} />
                        
                        <Card_Resultado color={'#FF56563D'} titulo={'Recoletas'} numero={18} porcentagem={18} icone={<CgDanger className="h-full w-full text-[#FF5656]" />} />
                    
                    </div>
                    <p className="text-[.875rem] font-normal mt-[.5rem] text-[#344051] ml-[1.5rem]">
                        Dados atualizados há <span className="font-medium text-black">45 segundos</span>.
                    </p>

                    <div className="py-[1.5rem] grid grid-cols-3 gap-[.625rem]">
                        <Button_Lab icone={<AiOutlineFileAdd className="mr-2 h-4 w-4" />} titulo={'Incluir Atendimento'} />

                        <Button_Lab icone={<FiSave className="mr-2 h-4 w-4" />} titulo={'Gerar Relatório'} />

                        <Button_Lab icone={<FiUsers className="mr-2 h-4 w-4" />} titulo={'Meus Pacientes'} />
                    </div>
                </div>

                {/** Conteúdo de avisos e notificações */}
                <div className="p-[3.625rem_0.625rem] flex flex-col gap-[.625rem]">
                    <Card_1 titulo={'Avisos'} texto={'Avisos do Sistema'}>
                        <div className="flex flex-col gap-[.5rem] h-[18rem] overflow-y-auto">
                            <Card_Notificacao status={false} titulo={'Atualização DB'} />
                            <Card_Notificacao status={true} titulo={'Atualização DB'} />
                        </div>
                    </Card_1>

                    <Card_1 titulo={'Notificações'} texto={'Informações sobre Amostras'}>
                        <div className="flex flex-col gap-[.5rem] h-[18rem] overflow-y-auto">
                            <Card_Notificacao status={false} titulo={'Amostra'} id={'A584'} />
                            <Card_Notificacao status={true} titulo={'Amostra'} id={'A589'} />
                        </div>
                    </Card_1>
                </div>
            </div>
        </>
    )
}

export default laboratorio;