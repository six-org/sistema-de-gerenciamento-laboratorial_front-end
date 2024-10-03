import { CiSearch } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import NavegacaoUser from "../ui/nav/navegacaoUser";

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

function getStatusClass(status: string) {
    switch (status) {
        case 'Concluído':
            return 'bg-[#10B97821] w-[90px] h-[24px] p-[0.5rem] pr-[0.9rem] pl-[0.9rem] rounded-[8px] text-[12px] text-[#10B978] font-medium';
        case 'Pendência':
            return 'bg-[#F6C27229] w-[90px] h-[24px] p-[0.5rem] pr-[0.8rem] pl-[0.8rem] rounded-[8px] text-[12px] text-[#F6C272] font-medium';
        case 'Processando':
            return 'bg-[#4870FF29] w-[90px] h-[24px] p-[0.5rem] rounded-[8px] text-[12px] text-[#4870FF] font-medium';
        default:
            return '';
    }
}

const paciente = () => {

    return (

        <div className="flex justify-center">
            <div className="grid grid-cols">
                {/** Navegação do usuário */}
                <NavegacaoUser />
            </div>
            <div className="mt-4 w-full px-16 pt[20px]">
                <div className="flex items-center text-[#4870FF] text-[24px] pt-[74px] pl-[10px] pb-[74px]">
                    <FaRegFileAlt />
                    <p className="px-2 py-2.5">Pacientes</p>
                </div>
                <div className="flex justify-between mb-2">
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
                        <div className="flex items-center bg-[#4870FF] w-[237px] h-[40px] text-white border border-[#E4E7EC] rounded-[8px] py-2 pr-3 pl-3">
                            <GoPlus />
                            <button className="ml-2 p-2 rounded-[8px] border-solid text-[15px]">Adicionar Manualmente</button>
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
                        {patients.map((patient) => (
                            <tr className="bg-[#FFFFFF]" key={patient.id}>
                                <td className="flex flex-row-reverse justify-end gap-[5px]">{patient.id}
                                    <div className=" w-[20px] h-[20px] border-2 border-[#CED2DA] rounded-[8px] ml-[1.8rem]"></div>
                                </td>
                                <td className="p-2">{patient.name}</td>
                                <td className="p-2">{patient.numero}</td>
                                <td className="p-2">
                                    <span className={`p-1 rounded ${getStatusClass(patient.status)}`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td className="p-2 pr-[20px] flex justify-end items-center gap-[1rem]">
                                    <div className="flex items-center w-[12rem] h-[2.2rem] bg-[#4870FF] rounded rounded-[0.5rem] text-white p-[0.5rem]">
                                        <GoChevronDown />
                                        <button className="bg-gray-200 p-1 rounded text-[0.8rem]">Expandir Visualização</button>
                                    </div>
                                    <div className="flex justify-center items-center w-[2rem] h-[2rem] rounded border border-[#4870FF] text-[#4870FF] cursor-pointer">
                                        <GoDownload />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-center items-center m-[100px] gap-[0.5rem] text-[#4870FF]">
                    <div className="flex justify-center items-center w-[2rem] h-[2rem] text-[1.0rem] border border-[#4870FF] rounded rounded-[0.3rem]">
                        <GoChevronLeft />
                    </div>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-[#4870FF] rounded rounded-[0.3rem]">1</button>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-[#4870FF] rounded rounded-[0.3rem]">2</button>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-[#4870FF] rounded rounded-[0.3rem]">3</button>
                    <button className="w-[2rem] h-[2rem] text-[1.0rem] border border-[#4870FF] rounded rounded-[0.3rem]">4</button>
                    <div className="flex justify-center items-center w-[2rem] h-[2rem] text-[1.0rem] border border-[#4870FF] rounded rounded-[0.3rem]">
                        <GoChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default paciente;