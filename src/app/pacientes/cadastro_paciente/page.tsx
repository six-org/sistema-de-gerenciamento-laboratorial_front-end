"use client";

import NavegacaoUser from "../../ui/nav/navegacaoUser";
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

const cadastro_paciente = () => {
  return (
    <>
      <div className="grid grid-cols-[17rem_1fr]">
        {/** Navegação do usuário */}
        <NavegacaoUser />
        {/** Conteúdo da página */}
        <div className=" grid  gap-[24px] px-[40px] py-[60px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/pacientes"
                  className="font-medium text-2xl flex gap-[0.625rem] items-center"
                >
                  <FiFileText />
                  Pacientes
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/cadastro_paciente"
                  className="font-medium text-2xl"
                >
                  Novo Paciente
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid gap-[24px]">
            <div className="grid gap-[24px]">
              <p className="font-medium text-xl">Dados Pessoais</p>
              <div className="flex gap-[26px]">
                <div className="grid">
                  <p className="font-normal	text-base">Nome*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="Digite seu nome completo..."
                  />
                </div>
                <div className="grid">
                  <p className="font-normal	text-base">CPF*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="123.456.789-10"
                  />
                </div>
                <div className="grid">
                  <p className="font-normal	text-base">RG*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="12.345.678-9"
                  />
                </div>
                <div className="grid">
                  <p className="font-normal	text-base">Data de Nascimento*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="03/12/2004"
                  />
                </div>
              </div>
              <div className="flex gap-[26px]">
                <div className="grid">
                  <p className="font-normal	text-base">Idade*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="24"
                  />
                </div>
                <div className="grid">
                  <p className="font-normal	text-base">Sexo*</p>
                  <Select>
                    <SelectTrigger className="w-[180px] h-[48px]">
                      <SelectValue placeholder="Selecione o sexo..." />
                    </SelectTrigger>
                    <SelectContent className="color-white">
                      <SelectItem value="light">Homem</SelectItem>
                      <SelectItem value="dark">Mulher</SelectItem>
                      <SelectItem value="system">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="grid gap-[24px]">
              <p className="font-medium text-xl">Endereço</p>
              <div className="flex gap-[24px]">
                <div>
                  <p className="font-normal	text-base">CEP*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="59990-000"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">Cidade*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="email"
                    placeholder="Beltranópolis"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">Endereço*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="email"
                    placeholder="Rua fulano de ciclano"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">Número*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="email"
                    placeholder="15"
                  />
                </div>
              </div>
              <div className="flex gap-[24px]">
                <div>
                  <p className="font-normal	text-base">Bairro*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="email"
                    placeholder="Centro"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">Complemento*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="email"
                    placeholder="Local de referência"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">UF*</p>
                  <Select>
                    <SelectTrigger className="w-[180px] h-[48px]">
                      <SelectValue placeholder="Selecione o Estado" />
                    </SelectTrigger>
                    <SelectContent className="color-white">
                      <SelectItem value="light">RN</SelectItem>
                      <SelectItem value="dark">CE</SelectItem>
                      <SelectItem value="system">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="grid gap-[24px]">
              <p className="font-medium text-xl">Contato</p>
              <div className="flex gap-[24px]">
                <div>
                  <p className="font-normal	text-base">Telefone*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="(11) 91234-5678"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">E-mail*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="email"
                    placeholder="joao.silva@email.com"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-[24px]">
              <p className="font-medium text-xl">Dados Médicos</p>
              <div className="flex gap-[24px]">
                <div>
                  <p className="font-normal	text-base">Tipo Sanguíneo*</p>
                  <Select>
                    <SelectTrigger className="w-[180px] h-[48px]">
                      <SelectValue placeholder="Selecione o tipo sanguíneo" />
                    </SelectTrigger>
                    <SelectContent className="color-white">
                      <SelectItem value="light">A+</SelectItem>
                      <SelectItem value="dark">B+</SelectItem>
                      <SelectItem value="system">AB+</SelectItem>
                      <SelectItem value="system">O+</SelectItem>
                      <SelectItem value="system">A-</SelectItem>
                      <SelectItem value="system">B-</SelectItem>
                      <SelectItem value="system">AB-</SelectItem>
                      <SelectItem value="system">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="font-normal	text-base">Peso*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="96Kg"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">Altura*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="1,76"
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">Alergias*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="Digite sua alergia..."
                  />
                </div>
              </div>
              <div className="flex gap-[24px]">
                <div>
                  <p className="font-normal	text-base">Doenças Preexistentes*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="Digite sua doença..."
                  />
                </div>
                <div>
                  <p className="font-normal	text-base">Medicamentos em uso*</p>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure"
                    type="text"
                    placeholder="Digite seus medicamentos"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[24px] justify-end ">
            <Button className="border-2 border-sky-500">Descartar</Button>
            <Button className="border-2 border-sky-500 text-white bg-[#4870FF]">
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default cadastro_paciente;
