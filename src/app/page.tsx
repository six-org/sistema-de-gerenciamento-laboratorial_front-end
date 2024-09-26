import Image from "next/image";
import { Input } from "@/components/ui/input"
import Link from 'next/link'


import { FcGoogle } from "react-icons/fc";


/* Importações de URL de imagens */
import imgBasicLab from "../../public/img/login/basic-lab.webp";


const home = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full">
        <div className="relative h-full w-full">
          <figure className="h-full w-full relative after:absolute after:inset-0 after:bg-primary-pure/20">
            <img className="h-full w-full object-center object-cover" src={imgBasicLab.src} alt="" />
          </figure>
        </div>

        <div className="flex flex-col justify-center items-center p-[1.5rem]">
          <div>
            <h1 className="text-neutral-dark font-black text-[2rem]">
              Bem vindo ao <span className="text-primary-pure">iLab Solutions</span>
            </h1>
            <p className="text-[1rem] text-neutral-light">
              Insira seus dados para realizar seu Login
            </p>


            <form className="mt-[3rem]">
              <div className="flex flex-col gap-[1rem]">
                <Input className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure" type="email" placeholder="Digite seu e-mail" />

                <Input className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure" type="password" placeholder="Digite sua senha" />
                <Link className="transition duration-[.3s] linear text-neutral-pure text-[1rem] hover:text-primary-pure focus-visible:text-primary-pure" href="#">Esqueceu a <strong>senha</strong>?</Link>
              </div>


              {/* Login alternativos */}
              <div className="w-full flex flex-col gap-[1rem] items-center mt-[2rem]">
                <p className="text-[1rem] text-neutral-light">
                  Continuar com...
                </p>

                {/* Lista de logins alternativos */}
                <ul className="w-full flex flex-wrap items-center justify-between">
                  <li>
                    <Link className="overflow rounded-[.2rem] p-[.5rem] transition duration-[.3s] linear bg-neutral-light/5 hover:bg-neutral-light/10 focus-visible:bg-neutral-light/10 w-[8rem] inline-flex justify-center" href="#">
                      <FcGoogle className="text-[2.5rem]" />
                    </Link>
                  </li>
                </ul>
              </div>

              <button type="submit" className="h-[3rem] bg-primary-pure w-full text-white p-[.3rem] rounded-[.4rem] mt-[2rem]">
                Entrar
              </button>

            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default home;