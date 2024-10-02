
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
  
type select_value ={
    value:string,
    text:string
}

export const Select_Cadastro_Paciente_Primary = (props:select_value) =>{
    return(
        <SelectItem value={props.value}
            className="
                transition-[background,color] duration-[.3s] linear
                hover:bg-primary-pure
                hover:text-white
            "
        >
            {props.text}
        </SelectItem>
    )
}