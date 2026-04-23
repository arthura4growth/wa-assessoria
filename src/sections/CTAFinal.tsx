import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import { useReducedMotion } from '../hooks/useReducedMotion';

const CTAFinal: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5531982074065";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+meu+caso.`;

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.cta-reveal', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="contato" ref={container} className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden cta-reveal">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/10 rounded-full"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
              Seu caso merece uma análise especializada.
            </h2>
            <p className="text-white/80 text-xl mb-12">
              Não deixe para depois o que pode custar caro hoje. Fale agora com a WA Advogados e receba orientação jurídica direta pelo WhatsApp.
            </p>
            <Button 
              href={whatsappLink} 
              isExternal 
              variant="white" 
              className="!px-12 !py-6 text-xl"
            >
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
