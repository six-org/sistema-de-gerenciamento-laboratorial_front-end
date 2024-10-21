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

/** Dados Locais */
import { Paciente, Endereco, Contato, DadosMedicos } from "@/app/components/dataLocal";


/** Componentes */
import { Select_Cadastro_Paciente_Primary } from "./components/select_cadastro_paciente";
import Link from "next/link";

import { useState } from 'react';

const cadastro_paciente = () => {

  /** Função para adicionar o paciente no localStorage */
  const savePaciente = (dados:Paciente, endereco:Endereco, contato:Contato, dadosMedicos:DadosMedicos) =>{
    

    const paciente = localStorage.getItem('pacienteData');
    let pacienteString = '';
    if(paciente){
      pacienteString = `${paciente},`;
    }
    pacienteString = `${pacienteString}${JSON.stringify(dados)}`;
    localStorage.setItem('pacienteData', pacienteString);
    localStorage.setItem('enderecoData', JSON.stringify(endereco));
    localStorage.setItem('contatoData', JSON.stringify(contato));
    localStorage.setItem('dadosMedicosData', JSON.stringify(dadosMedicos));
  } 


  const submitPaciente = (event:any) =>{
    
    event.preventDefault();

    const dados = new FormData(event.target);
    
    /** Dados Paciente */
    const nome = dados.get('paciente-nome');
    const cpf = dados.get('paciente-rg');
    const rg = dados.get('paciente-rg');
    const dataNascimento = dados.get('paciente-nascimento');
    const idade = dados.get('paciente-idade');
    const sexo = dados.get('paciente-sexo');

    /** Dados Endereço */
    const cep = dados.get('endereco-cep');
    const cidade = dados.get('endereco-cidade');
    const endereco = dados.get('endereco-endereco');
    const numero = dados.get('endereco-numero');
    const bairro = dados.get('endereco-bairro');
    const complemento = dados.get('endereco-complemento');
    const uf = dados.get('endereco-uf');

    /** Dados Contato */
    const telefone = dados.get('contato-telefone');
    const email = dados.get('contato-email');

    /** Dados Paciente */
    const tipoSangueneo = dados.get('dado-tipo-sanguineo');
    const peso = dados.get('dado-peso');
    const altura = dados.get('dado-altura');
    const alergias = dados.get('dado-alergia');
    const doencasPreexistentes = dados.get('dado-doencas-preexistentes');
    const medicamentoEmUso = dados.get('dado-medicamentos-em-uso');

    const novoPaciente:Paciente = {
      nome: nome as string,
      cpf: cpf as string,
      rg: rg as string,
      data_nascimento: dataNascimento as unknown as Date,
      idade: idade as unknown as number,
      sexo: sexo as string,
      n_atendimentos: 0,
    }

    const novoEndereco:Endereco = {
      cep: cep as string,
      cidade: cidade as string,
      endereco: endereco as string,
      numero: numero as unknown as number,
      bairro: bairro as string,
      complemento: complemento as string,
      uf: uf as string,
      pessoa: novoPaciente as Paciente,
    }

    const novoContato:Contato ={
      pessoa: novoPaciente as Paciente,
      email: email as string,
      telefone: telefone as string,
    }

    const novoDadoMedico:DadosMedicos = {
      pessoa: novoPaciente as Paciente,
      tipoSangueneo: tipoSangueneo as string,
      altura: altura as unknown as number,
      peso: peso as unknown as number,
      alergias: alergias as string,
      doencasPreexistentes: doencasPreexistentes as string,
      medicamentosEmUso: medicamentoEmUso as string,
    }

    
    /** Enviando dados para o localhost SEM tratamento */
    savePaciente(novoPaciente, novoEndereco, novoContato, novoDadoMedico);


    window.location.href = '/pacientes'; 
  }



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

          
          <form onSubmit={submitPaciente} className="gap-[24px] mt-[2.75rem]">

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
                    name="paciente-nome"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">CPF<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="123.456.789-10"
                    name="paciente-cpf"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">RG<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="12.345.678-9"
                    name="paciente-rg"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">Data de Nascimento<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="03/12/2004"
                    name="paciente-nascimento"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">Idade<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] w-full focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="24"
                    name="paciente-idade"
                  />
                </div>

                <div className="">
                <label className="font-normal text-base text-grey-700 flex">Sexo<p className="text-[#FF0000]">*</p></label>
                  <Select name="paciente-sexo">
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
                    name="endereco-cep"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Cidade<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Beltranópolis"
                    name="endereco-cidade"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Endereço<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Rua fulano de ciclano"
                    name="endereco-endereco"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Número<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="15"
                    name="endereco-numero"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Bairro<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Centro"
                    name="endereco-bairro"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Complemento<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Local de referência"
                    name="endereco-complemento"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">UF<p className="text-[#FF0000]">*</p></label>
                  <Select name="endereco-uf">
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
                    name="contato-telefone"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">E-mail<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="email"
                    placeholder="joao.silva@email.com"
                    name="contato-email"
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
                  <Select name="dado-tipo-sanguineo">
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
                    name="dado-peso"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Altura<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="1,76"
                    name="dado-altura"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Alergias<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite sua alergia..."
                    name="dado-alergia"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Doenças Preexistentes<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite sua doença..."
                    name="dado-doencas-preexistentes"
                  />
                </div>

                <div>
                <label className="font-normal text-base text-grey-700 flex">Medicamentos em Uso<p className="text-[#FF0000]">*</p></label>
                  <Input
                    className="h-[3rem] focus:outline-primary-pure focus-visible:outline-primary-pure focus-visible:text-primary-pure  border-[#D0D5DD]"
                    type="text"
                    placeholder="Digite seus medicamentos"
                    name="dado-medicamentos-em-uso"
                  />
                </div>
              </div>

              {/** Botões */}
              <div className="flex gap-[.625rem] justify-end mt-[1.125rem]">
                <Button className="border-2 border-sky-500 border-[#D0D5DD] w-[6.875rem]">
                    Descartar
                </Button>

                <Button type="submit" className="border-2 border-sky-500 text-white bg-primary-pure w-[6.875rem]">
                  Adicionar
                </Button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default cadastro_paciente;
