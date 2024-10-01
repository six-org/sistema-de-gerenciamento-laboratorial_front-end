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



const NavegacaoUser = () => {

    const pathname = usePathname();
    const { data, status } = useSession();

    return (
        <div className="w-full h-screen flex flex-col justify-between sticky p-[1.625rem_1rem] border-r-[1px] border-[#CED2DA]">
            <div>
                {/** Avatar do usuário */}
                <div className="flex items-center gap-[.5rem]">
                    <Avatar>
                        <AvatarImage className="h-[2.5rem] w-[2.5rem]" src={data?.user?.image!} />
                        <AvatarFallback>{data?.user?.name}</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-[.875rem] text-black leading-[1]">
                            {data?.user?.name}
                        </p>
                        <p className="text-[0.75rem] leading-[1]">
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
            </div>

            <div>
                <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center w-fit gap-[.5rem]">
                    <MdLogout />
                    
                    Desconectar
                </button>
            </div>
        </div>
    )
}

export default NavegacaoUser;