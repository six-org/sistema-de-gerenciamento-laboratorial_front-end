
import NavegacaoUser from "../../../components/navegacaoUser";

/* Componentes */
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import Item_Tabs from "./ui/item_tabs";


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
                            <TabsList className="flex items-center justify-start gap-[4px]">
                                <Item_Tabs value={'diario'} titulo={'Diário'} />
                                <Item_Tabs value={'semanal'} titulo={'Semanal'} />
                                <Item_Tabs value={'mensal'} titulo={'Mensal'} />
                                <Item_Tabs value={'anual'} titulo={'Anual'} />
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default laboratorio;