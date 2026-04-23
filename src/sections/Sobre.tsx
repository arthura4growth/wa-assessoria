import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Sobre: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.reveal-up', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="sobre" ref={container} className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <SectionTag className="reveal-up">Sobre nós</SectionTag>
            <h2 className="text-4xl md:text-5xl text-brand-navy mb-8 reveal-up">
              Compromisso com a sua tranquilidade e seus direitos.
            </h2>
          </div>
          <div className="text-lg text-brand-navy-muted leading-relaxed reveal-up">
            <p className="mb-6">
              Sabemos que problemas financeiros e negativas injustas geram ansiedade, insegurança e urgência. A WA Advogados atua com método, transparência e firmeza para proteger quem está do lado certo.
            </p>
            <p>
              Traduzimos o jurídico para uma linguagem que você entende, e cuidamos de cada detalhe processual para que você recupere o controle da sua vida. Nossa missão é ser a ponte entre a injustiça e a solução definitiva.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl reveal-up">
            <img 
              src="/legal_scales_desk_1776896349472.png" 
              alt="Justiça" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl reveal-up">
            <img 
              src="/contract_signing_close_up_1776896414066.png" 
              alt="Contrato" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl reveal-up">
            <img 
              src="/modern_office_hallway_1776896513845.png" 
              alt="Escritório" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
