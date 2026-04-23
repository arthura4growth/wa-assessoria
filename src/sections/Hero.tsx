import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
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

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 hero-content">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.2]">
          Resolva problemas com bancos e seguradoras com segurança jurídica.
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-normal leading-relaxed">
          Defesa especializada para quem enfrenta dívidas abusivas, busca e apreensão ou negativas de seguro. Atuação estratégica, acompanhamento do início ao fim.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            href={whatsappLink} 
            isExternal 
            variant="white" 
            className="w-full sm:w-auto"
          >
            Falar com especialista
          </Button>
          <Button 
            href="#areas" 
            variant="outline" 
            className="w-full sm:w-auto !text-white !border-white hover:!bg-white/10"
          >
            Conhecer as áreas de atuação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
