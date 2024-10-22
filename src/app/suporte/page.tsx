import { HeadphonesIcon } from "lucide-react";
import NavegacaoUser from "../../../components/navegacaoUser";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "react-day-picker";

const Suporte = () => {
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
                  <HeadphonesIcon />
                  Suporte
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-pure" />
              <BreadcrumbItem>
                <BreadcrumbLink className="font-medium text-[1.5rem] text-[#48505E]">
                  Andrey Sabino
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

        
          <div className="absolute w-[1000px] h-[625px] mt-[121px] ml-[50px] flex justify-between">
            
            <div className="mt-[2.75rem] w-[430px] h-[188px]">
                <p className="text-[18px] font-semibold text-[#48505E]">Perguntas Frequentes</p>
                <div className="h-[88px]">
                    <p className="text-[24px] font-semibold text-[#48505E]">Prefere falar com a gente?</p>
                    <p className="text-[14px] text-[#858D9D] mt-2">Se não encontrou o que procurava no FAQ, clique aqui e fale conosco pelo WhatsApp para um atendimento rápido e personalizado!</p>
                </div>
           </div>
  
           <div className="mt-[2.75rem] w-[504px]">
            <Accordion type="single" collapsible className="space-y-4 max-h-[500px] overflow-auto p-2">
                <AccordionItem value="item-1" className="border rounded-lg border-[#E4E7EC] text-[#48505E] p-4">
                    <AccordionTrigger><p className="max-w-[400px] text-start">Qual a diferença entre as permissões de usuário e permissões de administrador?</p></AccordionTrigger>
                    <AccordionContent className="text-[#858D9D]">
                    <hr className="text-[#E4E7EC] mb-4" />
                    As permissões de usuário geralmente incluem acesso às funcionalidades básicas, como visualização de amostras, inserção de dados e emissão de relatórios simples. Esses usuários têm permissões limitadas para modificar as configurações do sistema ou fazer alterações em dados críticos. 
                    Já os administradores têm acesso total ao sistema, podendo gerenciar usuários, modificar configurações avançadas, alterar fluxos de trabalho e ajustar permissões de acesso de outros usuários. Administradores também podem gerar relatórios completos e configurar integrações com outros sistemas.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg border-[#E4E7EC] text-[#48505E] p-4">
                    <AccordionTrigger><p className="max-w-[400px] text-start">Como registrar uma nova amostra no sistema?</p></AccordionTrigger>
                    <AccordionContent className="text-[#858D9D]">
                    <hr className="text-[#E4E7EC] mb-4" />
                    Texto aqui
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg border-[#E4E7EC] text-[#48505E] p-4">
                    <AccordionTrigger><p className="max-w-[400px] text-start">Como acompanhar o status de análise das amostras?</p></AccordionTrigger>
                    <AccordionContent className="text-[#858D9D]">
                    <hr className="text-[#E4E7EC] mb-4" />
                    Texto aqui
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg border-[#E4E7EC] text-[#48505E] p-4">
                    <AccordionTrigger><p className="max-w-[400px] text-start">Posso personalizar os relatórios gerados pelo sistema?</p></AccordionTrigger>
                    <AccordionContent className="text-[#858D9D]">
                    <hr className="text-[#E4E7EC] mb-4" />
                    Texto aqui
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg border-[#E4E7EC] text-[#48505E] p-4">
                    <AccordionTrigger><p className="max-w-[400px] text-start">O sistema de gerenciamento laboratorial permite integração com equipamentos de laboratório?</p></AccordionTrigger>
                    <AccordionContent className="text-[#858D9D]">
                    <hr className="text-[#E4E7EC] mb-4" />
                    Texto aqui
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg border-[#E4E7EC] text-[#48505E] p-4">
                    <AccordionTrigger><p className="max-w-[400px] text-start">Como acessar o suporte técnico em caso de problemas?</p></AccordionTrigger>
                    <AccordionContent className="text-[#858D9D]">
                    <hr className="text-[#E4E7EC] mb-4" />
                    Texto aqui
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Suporte;

