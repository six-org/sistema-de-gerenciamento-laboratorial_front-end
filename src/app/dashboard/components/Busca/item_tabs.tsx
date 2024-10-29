
import { TabsTrigger } from "@/components/ui/tabs"

type type_item = {
    titulo:string,
    value:string,
};

const Item_Tabs = (props:type_item) =>{
    return(
        <>
            <TabsTrigger className="data-[state=active]:shadow-[none] p-[4px_12px] text-[#71717A]/60 data-[state=active]:text-[#09090B] bg-[#F4F4F5] data-[state=active]:bg-[transparent]" value={props.value}>{props.titulo}</TabsTrigger>
        </>
    )
}

export default Item_Tabs;