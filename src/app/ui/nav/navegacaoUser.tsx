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



const NavegacaoUser = () => {

    const pathname = usePathname();

    return (
        <div className="w-full h-screen sticky p-[1.625rem_1rem] border-r-[1px] border-[#CED2DA]">
            {/** Avatar do usuário */}
            <div className="flex items-center gap-[.5rem]">
                <Avatar>
                    <AvatarImage className="h-[2.5rem] w-[2.5rem]" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-[.875rem] text-black leading-[1]">
                        Seu nome
                    </p>
                    <p className="text-[0.75rem] leading-[1]">
                        seu email
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
        </div>
    )
}

export default NavegacaoUser;