'use client'

import { HeadphonesIcon } from "lucide-react";
import NavegacaoUser from "../../../components/navegacaoUser";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "react-day-picker";
import { useSession } from 'next-auth/react';
import { FaWhatsapp } from "react-icons/fa";

const Suporte = () => {
  const { data, status } = useSession();


  const faq = [
    {
      pergunta: "Qual a diferença entre as permissões de usuário e permissões de administrador?",
      resposta: "As permissões de usuário geralmente incluem acesso às funcionalidades básicas, como visualização de amostras, inserção de dados e emissão de relatórios simples. Esses usuários têm permissões limitadas para modificar as configurações do sistema ou fazer alterações em dados críticos. Já os administradores têm acesso total ao sistema, podendo gerenciar usuários, modificar configurações avançadas, alterar fluxos de trabalho e ajustar permissões de acesso de outros usuários. Administradores também podem gerar relatórios completos e configurar integrações com outros sistemas."
    },
    {
      pergunta: "Como registrar uma nova amostra no sistema?",
      resposta: "Texto aqui."
    },
    {
      pergunta: "Como acompanhar o status de análise das amostras?",
      resposta: "Texto aqui.",
    },
    {
      pergunta: "Posso personalizar os relatórios gerados pelo sistema?",
      resposta: "Texto aqui.",
    },
    {
      pergunta: "O sistema de gerenciamento laboratorial permite integração com equipamentos de laboratório?",
      resposta: "Texto aqui.",
    },
    {
      pergunta: "Como acessar o suporte técnico em caso de problemas?",
      resposta: "Texto aqui."
    }
  ]


  return (
    <>
      <div className="grid grid-cols-[17rem_1fr]">
        <NavegacaoUser />

        <div className="px-[40px] py-[60px] w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/suporte"
                  className="font-medium text-[1.5rem] flex gap-[0.625rem] items-center text-primary-pure"
                >
                  <HeadphonesIcon />
                  Suporte
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-pure" />
              <BreadcrumbItem>
                <BreadcrumbLink className="font-medium text-[1.5rem] text-[#48505E]">
                {data?.user?.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>




          <div className="w-full grid grid-cols-[26.875rem_1fr] gap-[3.75rem] mt-[2.75rem]">

            <div className="w-full">
              <p className="text-[18px] font-semibold text-[#48505E]">Perguntas Frequentes</p>
              <div className="">
                <p className="text-[24px] font-semibold text-[#48505E]">Prefere falar com a gente?</p>
                <p className="text-[14px] text-[#858D9D] mt-2">Se não encontrou o que procurava no FAQ, clique aqui e fale conosco pelo WhatsApp para um atendimento rápido e personalizado!</p>
              </div>

              <a href="https://api.whatsapp.com/send?phone=5584996241610" target="_blank" className="mt-[1.5rem] rounded-[4px] border-2 border-sky-500 text-white bg-primary-pure inline-flex items-center w-fit gap-[.5rem] p-[.5rem_1rem]">
                <FaWhatsapp className="h-[1rem] w-[1rem]"  /> iLab Solutions
              </a>
            </div>

            <div className="w-full">
              <Accordion type="single" collapsible className="space-y-4 p-2">

                {faq.map((value, index)=>(
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg border-[#E4E7EC] text-[#48505E] p-4">
                    <AccordionTrigger><p className="max-w-[400px] text-start">{value.pergunta}</p></AccordionTrigger>
                    <AccordionContent className="text-[#858D9D]">
                      <hr className="text-[#E4E7EC] mb-4" />
                        {value.resposta}
                      </AccordionContent>
                </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Suporte;

