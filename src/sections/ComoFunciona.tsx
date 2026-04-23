import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ComoFunciona: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.step-item', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: container });

  const steps = [
    {
      num: "01",
      title: "Atendimento inicial no WhatsApp",
      desc: "Você conta sua situação de forma direta e sem compromisso. Nossa equipe entende a urgência e responde prontamente."
    },
    {
      num: "02",
      title: "Análise jurídica do caso",
      desc: "Avaliamos contratos, documentos e a viabilidade jurídica do seu caso para garantir que temos um caminho sólido."
    },
    {
      num: "03",
      title: "Estratégia personalizada",
      desc: "Você recebe um plano claro, com prazos, expectativas e todos os passos que serão tomados para resolver seu problema."
    },
    {
      num: "04",
      title: "Acompanhamento do início ao fim",
      desc: "Atuamos até a resolução final, mantendo você informado sobre cada movimento e protegendo seus interesses."
    }
  ];

  return (
    <section id="como-funciona" ref={container} className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionTag>Como Funciona</SectionTag>
          <h2 className="text-4xl md:text-5xl text-brand-navy max-w-2xl">
            Transparência em cada etapa do processo.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-brand-blue-border -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="step-item relative">
              <div className="text-6xl font-bold text-brand-blue mb-6 font-serif opacity-40">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 min-h-[3rem]">
                {step.title}
              </h3>
              <p className="text-brand-navy-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
