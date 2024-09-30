'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type propsLink = {
    title:string,
    href:string,
    icone:ReactNode
}

const ItemNavegacaoUser = (props:propsLink) => {
    const pathname = usePathname();
    return (
        <Link className={`relative ${(pathname.includes(props.href)) ? 'text-primary-pure after:w-[2px] after:bg-primary-pure after:h-full after:absolute after:inset-0' : 'text-neutral-light focus-visible:after:w-[2px] focus-visible:after:bg-primary-pure focus-visible:after:h-full focus-visible:after:absolute focus-visible:after:left-0 focus:after:w-[2px] focus:after:bg-primary-pure focus:after:h-full focus:after:absolute focus:after:left-0 hover:after:w-[2px] hover:after:bg-primary-pure hover:after:h-full hover:after:absolute hover:after:left-0 after:transition-[height] after:duration-[.3s] after:linear after:h-[0]'} hover:text-primary-pure focus:text-primary-pure focus-visible:text-primary-pure p-[.625rem] flex items-center gap-[.5rem] transition duration-[.3s] linear focus-visible:outline-none`} href={props.href}>
            {props.icone}
            {props.title}
        </Link>
    )
}

export default ItemNavegacaoUser;