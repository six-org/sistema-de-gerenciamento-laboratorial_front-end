"use client"; 
import NavegacaoUser from "../../../../components/navegacaoUser";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FiFileText } from "react-icons/fi";
import { FaRegFile } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Card, CardContent} from "@/components/ui/card";
import MiniCalendario from "./Component/Calendario";
import DownloadButton from "./Component/ButtonDetalheExame";

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
  
  const handleDownload = () => {
    alert("Download do exame iniciado.");
  };

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

         
          <div className="ml-[50px] mt-[50px]">
            <p className="text-[18px] font-semibold text-[#48505E] mb-[20px]">Dados do Paciente</p>
            <div className="grid grid-cols-3 grid-rows-[252px_194px] gap-4">
              <Card className="border-[#E4E7EC] rounded-[16px]">
                <CardContent className="w-[167px] space-y-4 mt-[30px]">
                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Nome</p>
                    <p className="text-[#AAAAAA]  text-[12px]">Andrey de Oliveira Sabino</p>
                   </div>

                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Data de Nascimento</p>
                    <div className="flex flex-row justify-between text-[#AAAAAA]  text-[12px]">
                    <p className="">10/01/2001</p>
                    <p>05h48</p>
                    </div>  
                   </div>

                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">RG</p>
                    <p className="text-[#AAAAAA]  text-[12px]">xxx.xxx.xx</p>
                   </div>

                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">E-Mail</p>
                    <p className="text-[#AAAAAA]  text-[12px]">email@example.com.br</p>
                   </div>

                </CardContent>
              </Card>

              <Card className="border-[#E4E7EC] rounded-[16px]">
                <CardContent className="w-[167px] space-y-4 mt-[30px]">
                  <p className="text-[#444444] text-[12px] font-semibold">Medicações</p>
                   <div className="w-[284px] flex flex-col">
                   <div className="flex flex-row justify-between text-[#AAAAAA]  text-[12px]">
                    <p className="text-[#444444] text-[12px] font-semibold">Clonazepan</p>
                    <p>50mg</p>
                    </div>  
                    <MiniCalendario/>
                   </div>
                   
                   <div className="w-[284px] flex flex-col">
                   <div className="flex flex-row justify-between text-[#AAAAAA]  text-[12px]">
                    <p className="text-[#444444] text-[12px] font-semibold">Loratadina</p>
                    <p>50mg</p>
                    </div>  
                    <MiniCalendario/>
                   </div>
                  
                </CardContent>
              </Card>

              <Card className="h-[464px] border-[#E4E7EC] rounded-[16px]">
                <CardContent className="w-[266.47px] space-y-4 mt-[30px]">
                  <p className="text-[#444444] text-[12px] font-semibold">Exames</p>
                  <div className="overflow-y-auto h-[350px] w-[266.47px] flex flex-col space-y-5">

                    <div className="flex w-full h-10 items-center">
                      <div className="w-10 h-10 flex items-center ml-[7.94px]">
                        <FaRegFile className="w-[16px] h-[16px] text-primary-pure" />
                      </div>

                      <div className="w-[127px] h-10 flex flex-col">
                        <p className="text-[#4B4C4D] text-[14px] font-semibold">Exame-1</p>
                        <p className="text-[#A5A8B4] text-[13px]">15 de jan 2020</p>
                      </div>
                      <DownloadButton onDownload={handleDownload} />
                    </div>

                    <div className="flex w-full h-10 items-center">
                      <div className="w-10 h-10 flex items-center ml-[7.94px]">
                        <FaRegFile className="w-[16px] h-[16px] text-primary-pure" />
                      </div>

                      <div className="w-[127px] h-10 flex flex-col">
                        <p className="text-[#4B4C4D] text-[14px] font-semibold">Exame-1</p>
                        <p className="text-[#A5A8B4] text-[13px]">15 de jan 2020</p>
                      </div>
                      <DownloadButton onDownload={handleDownload} />
                    </div>

                    <div className="flex w-full h-10 items-center">
                      <div className="w-10 h-10 flex items-center ml-[7.94px]">
                        <FaRegFile className="w-[16px] h-[16px] text-primary-pure" />
                      </div>

                      <div className="w-[127px] h-10 flex flex-col">
                        <p className="text-[#4B4C4D] text-[14px] font-semibold">Exame-1</p>
                        <p className="text-[#A5A8B4] text-[13px]">15 de jan 2020</p>
                      </div>
                      <DownloadButton onDownload={handleDownload} />
                    </div>

                    <div className="flex w-full h-10 items-center">
                      <div className="w-10 h-10 flex items-center ml-[7.94px]">
                        <FaRegFile className="w-[16px] h-[16px] text-primary-pure" />
                      </div>

                      <div className="w-[127px] h-10 flex flex-col">
                        <p className="text-[#4B4C4D] text-[14px] font-semibold">Exame-1</p>
                        <p className="text-[#A5A8B4] text-[13px]">15 de jan 2020</p>
                      </div>
                      <DownloadButton onDownload={handleDownload} />
                    </div>

                    <div className="flex w-full h-10 items-center">
                      <div className="w-10 h-10 flex items-center ml-[7.94px]">
                        <FaRegFile className="w-[16px] h-[16px] text-primary-pure" />
                      </div>

                      <div className="w-[127px] h-10 flex flex-col">
                        <p className="text-[#4B4C4D] text-[14px] font-semibold">Exame-1</p>
                        <p className="text-[#A5A8B4] text-[13px]">15 de jan 2020</p>
                      </div>
                      <DownloadButton onDownload={handleDownload} />
                    </div>                 
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E4E7EC] rounded-[16px]">
                <CardContent className="w-[167px] space-y-4 mt-[30px]">
                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Alergias</p>
                    <p className="text-[#AAAAAA]  text-[12px]">Não consta</p>
                   </div>

                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Doenças Crônicas</p>
                    <div className="flex flex-row justify-between text-[#AAAAAA]  text-[12px]">
                    <p className="">10/01/2001</p>
                    <p>05h48</p>
                    </div>  
                   </div>

                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Tipo Sanguíneo</p>
                    <p className="text-[#AAAAAA]  text-[12px]">O+</p>
                   </div>
                </CardContent>
              </Card>

              <Card className="border-[#E4E7EC] rounded-[16px]">
                <CardContent className="w-[167px] space-y-4 mt-[30px]">
                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Alergias</p>
                    <p className="text-[#AAAAAA]  text-[12px]">Não consta</p>
                   </div>

                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Doenças Crônicas</p>
                    <div className="flex flex-row justify-between text-[#AAAAAA]  text-[12px]">
                    <p className="">10/01/2001</p>
                    <p>05h48</p>
                    </div>  
                   </div>

                   <div className="w-[147px] flex flex-col">
                    <p className="text-[#444444] text-[12px] font-semibold">Tipo Sanguíneo</p>
                    <p className="text-[#AAAAAA]  text-[12px]">O+</p>
                   </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default detalhe_paciente;
