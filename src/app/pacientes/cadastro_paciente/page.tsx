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
                  className="font-medium text-2xl flex gap-[0.625rem] items-center text-[#4870FF]"
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
                  <label className="font-normal	text-base flex">Nome<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite seu nome completo..."
                  />
                </div>
                <div className="grid">
                <label className="font-normal	text-base flex">CPF<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="123.456.789-10"
                  />
                </div>
                <div className="grid">
                <label className="font-normal	text-base flex">RG<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="12.345.678-9"
                  />
                </div>
                <div className="grid">
                <label className="font-normal	text-base flex">Data de Nascimento<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="03/12/2004"
                  />
                </div>
              </div>
              <div className="flex gap-[26px]">
                <div className="grid">
                <label className="font-normal	text-base flex">Idade<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="24"
                  />
                </div>
                <div className="grid">
                <label className="font-normal	text-base flex">Sexo<p className="text-[#FF0000]">*</p></label>
                  <Select>
                    <SelectTrigger className="w-[180px] h-[48px] border-[#D0D5DD]">
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
                <label className="font-normal	text-base flex">CEP<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="59990-000"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">Cidade<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Beltranópolis"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">Endereço<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Rua fulano de ciclano"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">Número<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="15"
                  />
                </div>
              </div>
              <div className="flex gap-[24px]">
                <div>
                <label className="font-normal	text-base flex">Bairro<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Centro"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">Complemento<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="Local de referência"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">UF<p className="text-[#FF0000]">*</p></label>
                  <Select>
                    <SelectTrigger className="w-[180px] h-[48px] border-[#D0D5DD]">
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
                <label className="font-normal	text-base flex">Telefone<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="(11) 91234-5678"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">E-mail<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
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
                <label className="font-normal	text-base flex">Tipo Sanguíneo<p className="text-[#FF0000]">*</p></label>
                  <Select>
                    <SelectTrigger className="w-[180px] h-[48px] border-[#D0D5DD]">
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
                <label className="font-normal	text-base flex">Peso<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="96Kg"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">Altura<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="1,76"
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">Alergias<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite sua alergia..."
                  />
                </div>
              </div>
              <div className="flex gap-[24px]">
                <div>
                <label className="font-normal	text-base flex">Doenças Preexistentes<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite sua doença..."
                  />
                </div>
                <div>
                <label className="font-normal	text-base flex">Medicamentos em Uso<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure  border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite seus medicamentos"
                  />
                </div>
              </div>
              <div className="flex gap-[24px] justify-center">
                <Button className="border-2 border-sky-500 border-[#D0D5DD]">Descartar</Button>
                <Button className="border-2 border-sky-500 text-white bg-[#4870FF]">
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
