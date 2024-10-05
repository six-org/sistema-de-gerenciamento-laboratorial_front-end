"use client";

import NavegacaoUser from "../../../../components/navegacaoUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FiFileText } from "react-icons/fi";


/** Componentes */
import { Select_Cadastro_Paciente_Primary } from "./components/select_cadastro_paciente";
import Link from "next/link";

const cadastro_paciente = () => {
  return (
    <>
      <div className="grid grid-cols-[17rem_1fr]">
        {/** Navegação do usuário */}
        <NavegacaoUser />
        {/** Conteúdo da página */}
        <div className="gap-[24px] px-[40px] py-[60px] w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link
                  href="/pacientes"
                  className="font-medium text-[1.5rem] flex gap-[0.625rem] items-center text-primary-pure"
                >
                  <FiFileText />
                  Pacientes
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-pure" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="font-medium text-[1.5rem] text-[#48505E]"
                >
                  Novo Paciente
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          
          <div className="gap-[24px] mt-[2.75rem]">

            {/** Dados Pessoais */}
            <div className="gap-[24px]">
              <p className="font-medium text-xl">Dados Pessoais</p>

              
              <div className="grid grid-cols-4 gap-[26px] mt-[1.5rem]">
                <div className="">
                  <label className="font-normal	text-base flex text-grey-700">Nome<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite seu nome completo..."
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">CPF<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="123.456.789-10"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">RG<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="12.345.678-9"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">Data de Nascimento<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="03/12/2004"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">Idade<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="24"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">Sexo<p className="text-[#FF0000]">*</p></label>
                  <Select>
                    <SelectTrigger className="w-full h-[48px] border-[#D0D5DD] text-grey-400">
                      <SelectValue placeholder="Selecione o sexo..." />
                    </SelectTrigger>
                    <SelectContent className="color-white bg-white">
                        <Select_Cadastro_Paciente_Primary value="homem" text="Homem" />
                        <Select_Cadastro_Paciente_Primary value="mulher" text="Mulher" />
                        <Select_Cadastro_Paciente_Primary value="outros" text="Outros" />
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/** Endereço */}
            <div className="gap-[24px] mt-[2rem]">
              <p className="font-medium text-xl">Endereço</p>
              <div className="grid grid-cols-4 gap-[24px] mt-[1.5rem]">
                <div>
                <label className="font-normal text-base text-grey-700 flex">CEP<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="59990-000"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Cidade<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Beltranópolis"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Endereço<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Rua fulano de ciclano"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Número<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="15"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Bairro<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Centro"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Complemento<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Local de referência"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">UF<p className="text-[#FF0000]">*</p></label>
                  <Select>
                    <SelectTrigger className="w-full h-[48px] border-[#D0D5DD] text-grey-400">
                      <SelectValue placeholder="Selecione o Estado" />
                    </SelectTrigger>
                    <SelectContent className="color-white bg-white">
                        <Select_Cadastro_Paciente_Primary value="rn" text="RN" />
                        <Select_Cadastro_Paciente_Primary value="ce" text="CE" />
                        <Select_Cadastro_Paciente_Primary value="outros" text="Outros" />
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/** Contato */}
            <div className="gap-[24px] mt-[2rem]">
              <p className="font-medium text-xl">Contato</p>
              <div className="grid grid-cols-4 gap-[24px] mt-[1.5rem]">
                <div>
                <label className="font-normal text-base text-grey-700 flex">Telefone<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="(11) 91234-5678"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">E-mail<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="joao.silva@email.com"
                  />
                </div>
              </div>
            </div>

            {/** Dados Médicos */}
            <div className="gap-[24px] mt-[2rem]">
              <p className="font-medium text-xl">Dados Médicos</p>
              <div className="grid grid-cols-4 gap-[24px] mt-[1.5rem]">
                <div>
                <label className="font-normal text-base text-grey-700 flex">Tipo Sanguíneo<p className="text-[#FF0000]">*</p></label>
                  <Select>
                    <SelectTrigger className="w-full h-[48px] border-[#D0D5DD] text-grey-400">
                      <SelectValue placeholder="Selecione o tipo sanguíneo" />
                    </SelectTrigger>
                    <SelectContent className="color-white bg-white">
                        <Select_Cadastro_Paciente_Primary value="A+" text="A+" />
                        <Select_Cadastro_Paciente_Primary value="B+" text="B+" />
                        <Select_Cadastro_Paciente_Primary value="AB+" text="AB+" />
                        <Select_Cadastro_Paciente_Primary value="O+" text="O+" />
                        <Select_Cadastro_Paciente_Primary value="A-" text="A-" />
                        <Select_Cadastro_Paciente_Primary value="B-" text="B-" />
                        <Select_Cadastro_Paciente_Primary value="AB-" text="AB-" />
                        <Select_Cadastro_Paciente_Primary value="O-" text="O-" />
                    </SelectContent>
                  </Select>
                </div>

                <div>
                <label className="font-normal	text-base text-grey-700 flex">Peso<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="96Kg"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Altura<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="1,76"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Alergias<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite sua alergia..."
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Doenças Preexistentes<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite sua doença..."
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Medicamentos em Uso<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure  border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite seus medicamentos"
                  />
                </div>
              </div>

              {/** Botões */}
              <div className="flex gap-[.625rem] justify-end mt-[1.125rem]">
                <Button className="border-2 border-sky-500 border-[#D0D5DD] w-[6.875rem]">
                    Descartar
                </Button>

                <Button className="border-2 border-sky-500 text-white bg-primary-pure w-[6.875rem]">
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cadastro_paciente;
