"use client"

import { CiSearch } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import NavegacaoUser from "../../../components/navegacaoUser";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import { FiFileText } from "react-icons/fi";

import { useEffect, useState } from "react";
import { Paciente } from "../components/dataLocal";



/*
const patients = [
    { id: 45, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Concluído' },
    { id: 46, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Pendência' },
    { id: 47, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Concluído' },
    { id: 48, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Concluído' },
    { id: 49, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Concluído' },
    { id: 50, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Processando' },
    { id: 51, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Concluído' },
    { id: 52, name: 'Andrey de Oliveira S...', numero: 84856, status: 'Concluído' },
];
*/


function getStatusClass(status: string) {
    switch (status) {
        case 'Concluído':
            return 'bg-[#10B97821] w-[90px] h-[24px] p-[0.5rem] pr-[0.9rem] pl-[0.9rem] rounded-[8px] text-[12px] text-[#10B978] font-medium';
        case 'Pendência':
            return 'bg-[#F6C27229] w-[90px] h-[24px] p-[0.5rem] pr-[0.8rem] pl-[0.8rem] rounded-[8px] text-[12px] text-[#F6C272] font-medium';
        case 'Processando':
            return 'bg-[#4870FF29] w-[90px] h-[24px] p-[0.5rem] rounded-[8px] text-[12px] text-primary-pure font-medium';
        default:
            return '';
    }
}



const PagePaciente = () => {
    const [patients, setPatients] = useState<Paciente[]>([]);

    function loadDados(){
        const Dados = localStorage.getItem('pacienteData');
        const json = JSON.parse(`[${Dados}]`);
    
        
        json.forEach((i:Paciente)=>{
            setPatients((jsonAntigo) => [...jsonAntigo, i]);
        })
    
    }
    
    useEffect(()=>{

        return () => {
            loadDados();
          };
    },[])

    return (

        <div className="flex justify-center">
            <div className="grid grid-cols-[17rem_1fr]">
                {/** Navegação do usuário */}
                <NavegacaoUser />
            </div>
            <div className="px-[40px] py-[60px] w-full">
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
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex justify-between mb-2 mt-[2.875rem]">
                    <div className="flex px-2 pr-2.5 pl-3 items-center border border-[#E4E7EC] rounded-[8px]">
                        <CiSearch />
                        <input
                            type="text"
                            placeholder="Buscar Paciente ou Exame"
                            className="border-none p-2 rounded outline-none"
                        />
                    </div>
                    <div className="flex gap-2.5" >
                        <div className="flex items-center gap-2.5 border border-[#E4E7EC] rounded-[8px] py-2 pr-3 pl-3">
                            <MdOutlineSort />
                            <p>Filte</p>
                        </div>
                        <div className="flex items-center bg-primary-pure w-[237px] h-[40px] text-white border border-[#E4E7EC] rounded-[8px] py-2 pr-3 pl-3">
                            <GoPlus />
                            <Link href='/pacientes/cadastro_paciente'>
                                <button className="ml-2 p-2 rounded-[8px] border-solid text-[15px]">Adicionar Manualmente</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <table className="w-full mt-[50px] bg-[#F9FAFB] text-center">
                    <thead>
                        <tr>
                            <th className=" flex items-center text-[#667085] justify-center gap-[5px] p-2">
                                <div className=" w-[20px] h-[20px] border-2 border-[#CED2DA] rounded-[8px]"></div>
                                <p>Amostra</p>
                            </th>
                            <th className=" p-2 text-[#667085]">Paciente</th>
                            <th className=" p-2 text-[#667085]">Nº Atendimentos</th>
                            <th className=" p-2 text-[#667085]">Estado da Análise</th>
                            <th className=" p-2 text-[#667085]">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient:Paciente, index:number) => (
                            <tr className="bg-[#FFFFFF]" key={index + 1}>
                                <td className="flex flex-row-reverse justify-end gap-[5px]"> {index + 1}
                                    <div className=" w-[20px] h-[20px] border-2 border-[#CED2DA] rounded-[8px] ml-[1.8rem]"></div>
                                </td>
                                <td className="p-2">{patient.nome}</td>
                                <td className="p-2">numero</td>
                                <td className="p-2">
                                    <span className={`p-1 rounded ${getStatusClass('Pendência')}`}>
                                        Pendência
                                    </span>
                                </td>
                                <td className="p-2 pr-[20px] flex justify-end items-center gap-[1rem]">
                                    <div className="flex items-center w-[12rem] h-[2.2rem] bg-primary-pure rounded rounded-[0.5rem] text-white p-[0.5rem]">
                                        <GoChevronDown />
                                        <button className="bg-gray-200 p-1 rounded text-[0.8rem]">Expandir Visualização</button>
                                    </div>
                                    <div className="flex justify-center items-center w-[2rem] h-[2rem] rounded border border-primary-pure text-primary-pure cursor-pointer">
                                        <GoDownload />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-center items-center m-[100px] gap-[0.5rem] text-primary-pure">
                    <div className="flex justify-center items-center w-[2rem] h-[2rem] text-[1.0rem] border border-primary-pure rounded rounded-[0.3rem]">
                        <GoChevronLeft />
                    </div>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-primary-pure rounded rounded-[0.3rem]">1</button>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-primary-pure rounded rounded-[0.3rem]">2</button>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-primary-pure rounded rounded-[0.3rem]">3</button>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-primary-pure rounded rounded-[0.3rem]">4</button>
                    <div className="flex justify-center items-center w-[2rem] h-[2rem] text-[1.0rem] border border-primary-pure rounded rounded-[0.3rem]">
                        <GoChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagePaciente;