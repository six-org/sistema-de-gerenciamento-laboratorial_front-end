'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import ItemNavegacaoUser from "./itemNavegacaoUser";

/* Icones */
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { IoFlaskOutline } from "react-icons/io5";
import { PiCalendarPlusBold } from "react-icons/pi";
import { PiGearSix } from "react-icons/pi";
import { MdOutlineHeadphones } from "react-icons/md";
import { MdLogout } from "react-icons/md";

import { useSession } from 'next-auth/react';

import { signOut } from "next-auth/react";

import { Card_1 } from "./cards";
 
import { Button } from "@/components/ui/button"

import { useState } from "react";




const NavegacaoUser = () => {

    const pathname = usePathname();
    const { data, status } = useSession();

    const [progress, setProgress] = useState(60);

    /*React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])*/

    return (
        <div className="w-full h-screen flex flex-col justify-between sticky top-0 p-[1.625rem_1rem] border-r-[1px] border-[#CED2DA]">
            <div>
                {/** Avatar do usuário */}
                <div className="flex items-center gap-[.5rem]">
                    <Avatar>
                        <AvatarImage className="h-[2.5rem] w-[2.5rem]" src={data?.user?.image!} />
                        <AvatarFallback>{data?.user?.name}</AvatarFallback>
                    </Avatar>

                    <div className="overflow-hidden w-full">
                        <p className="text-[.875rem] text-black leading-[1] truncate">
                            {data?.user?.name}
                        </p>
                        <p className="text-[0.75rem] leading-[1] text-[#364051] truncate">
                            {data?.user?.email}
                        </p>
                    </div>
                </div>
                
                {/** Navegação do usuário */}
                <nav className="flex flex-col gap-[0.625rem] mt-[3rem]">
                    <ItemNavegacaoUser title={'Dashboard'} href={'/home'} icone={<RxDashboard />} />

                    <ItemNavegacaoUser title={'Pacientes'} href={'/pacientes'} icone={<PiUsersThree />} />

                    <ItemNavegacaoUser title={'Laboratório'} href={'/laboratorio'} icone={<IoFlaskOutline />} />

                    <ItemNavegacaoUser title={'Calendário'} href={'/calendario'} icone={<PiCalendarPlusBold />} />

                    <ItemNavegacaoUser title={'Configurações'} href={'/configuracoes'} icone={<PiGearSix />} />

                    <ItemNavegacaoUser title={'Suporte'} href={'/suporte'} icone={<MdOutlineHeadphones />} />
                </nav>

                <div className="mt-[3rem]">
                    <Card_1 titulo={'Pacientes Cadastrados'} texto={`481 de 900`} is_nav={true}>
                        <span className="w-full flex justify-start h-[4px] rounded-[2px] overflow-hidden bg-[#EFF1F3]">
                            <span style={{width:`${progress}%`}} className="h-full bg-primary-pure flex rounded-[0_2px_2px_0]"></span>
                        </span>
                        <Button className="bg-[transparent] hover:bg-primary-pure text-[.75rem] text-[#71717A] hover:text-white w-full h-auto p-[2px] border-[#E4E7EC] hover:border-primary-pure border-solid border-[1px] rounded-[.375rem] mt-[10px]">
                            Atualizar
                        </Button>
                    </Card_1>
                </div>
            </div>

            <div>
                <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center w-fit gap-[.5rem] text-[0.75rem] text-[#71717A] hover:text-error transition-[color] duration-[.3s] linear">
                    <MdLogout className="h-[1.25rem] w-[1.25rem]" />
                    
                    Desconectar
                </button>
            </div>
        </div>
    )
}

export default NavegacaoUser;