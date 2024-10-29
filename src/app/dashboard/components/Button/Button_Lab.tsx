import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type type_button_lab = {
  titulo: string;
  icone: ReactNode;
};

const Button_Lab = (props: type_button_lab) => {
  return (
    <>
      <Button
        className="
                bg-[transparent] hover:bg-primary-pure
                border-[2px]
                border-solid
                border-neutral-pure/20 hover:border-primary-pure
                text-primary-pure hover:text-white
                w-full
            "
      >
        {props.icone} {props.titulo}
      </Button>
    </>
  );
};

export default Button_Lab;
