import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5531982074065";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+meu+caso.`;

  useGSAP(() => {
    if (prefersReducedMotion) return;

    const tl = gsap.timeline();
    tl.from('.hero-content > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_lawyer_office_1776896316439.png" 
          alt="Escritório Jurídico WA Advogados" 
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto md:text-center text-left px-6 hero-content">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-8 leading-[1.2] max-w-4xl md:mx-auto">
          Soluções jurídicas decisivas e completas para proteger seu patrimônio e seus direitos.
        </h1>
        <p className="text-white/90 text-base md:text-xl max-w-2xl md:mx-auto mb-10 md:mb-12 font-normal leading-relaxed">
          Especialistas em causas bancárias, securitárias, trabalhistas, previdenciárias e imobiliárias. Atuação estratégica para garantir a sua tranquilidade e reverter injustiças.
        </p>
        <div className="flex flex-col sm:flex-row items-start md:items-center justify-start md:justify-center gap-4">
          <Button 
            href={whatsappLink} 
            isExternal 
            variant="white" 
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            Falar com especialista
          </Button>
          <Button 
            href="#areas" 
            variant="outline" 
            className="w-full sm:w-auto !text-white !border-white hover:!bg-white/10 text-sm sm:text-base"
          >
            Conhecer as áreas de atuação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
