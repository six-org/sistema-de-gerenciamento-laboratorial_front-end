"use client";

import SessionWrapper from "@/app/components/SessionWrapper";
import NavegacaoUser from "../../../../components/navegacaoUser";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FiFileText } from "react-icons/fi";

const detalhe_paciente = () => {
  const steps = [
    { date: '12.06', label: 'Coletada', completed: true },
    { date: '13.06', label: 'Recebida', completed: true },
    { date: '15.06', label: 'Preparo', completed: true },
    { date: '17.06', label: 'Análise', completed: true },
    { date: '19.06', label: 'Revisão', completed: false },
    { date: '20.06', label: 'Liberada', completed: false },
    { date: '21.06', label: 'Laudo Pronto', completed: false },
    { date: '22.06', label: 'Processo Concluído', completed: false },
  ];
  
  return (
    <>
      <div className="grid grid-cols-[17rem_1fr_23.75rem]">
        <NavegacaoUser />

      
        <div className="flex flex-col">
       
        <Breadcrumb className="mt-[74px] ml-[40px] py-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/pacientes"
                  className="font-medium text-[1.5rem] flex gap-[0.625rem] items-center text-primary-pure"
                >
                  <FiFileText />
                  Pacientes
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-pure" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="font-medium text-[1.5rem] text-[#48505E]"
                >
                  Andrey Sabino
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col ml-[50px] mt-[2.75rem]">
            <p className="text-[18px] font-semibold text-[#48505E]">Rastreio da Amostra</p>
            <p className="text-[14px] font-medium text-[#667085]">Onde está a sua amostra agora? Veja aqui!</p>

            <div className="w-[1016px] h-[65px] mt-5 flex">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300"></div>

              <div className="flex w-full">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col w-[calc((100%-10px)/8)] h-[65px]">
                    <p className="text-[16px] font-bold">{step.date}</p>
                    <p className="text-[13px] text-[#AAAAAA]">{step.label}</p>
                    <div className="flex items-center gap-1 p-2 ml-1"> 
                      <div className={`w-[10px] h-[10px] rounded-full ${step.completed ? 'bg-primary-pure' : 'bg-[#CED2DA]'}`}></div>
                      <div className={`w-[95px] h-[2px] rounded-[50px] ${step.completed ? 'bg-primary-pure' : 'bg-[#CED2DA]'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default detalhe_paciente;
