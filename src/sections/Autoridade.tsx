import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Quote } from 'lucide-react';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Autoridade: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    });
  }, { scope: container });

  const testimonials = [
    {
      name: "Ricardo Silva",
      text: "Estava desesperado com a busca e apreensão do meu carro. A WA Assessoria agiu rápido e conseguiu reverter a situação. Extremamente profissionais."
    },
    {
      name: "Maria Oliveira",
      text: "O seguro negou a indenização após o falecimento do meu marido. Sem a WA, eu nunca teria conseguido meus direitos. Gratidão eterna."
    },
    {
      name: "João Pereira",
      text: "Reduzi minha dívida bancária em mais de 60% com a ajuda deles. O atendimento pelo WhatsApp facilitou muito minha vida corrida."
    }
  ];

  return (
    <section ref={container} className="bg-brand-blue-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTag>Depoimentos</SectionTag>
          <h2 className="text-4xl md:text-5xl text-brand-navy mb-6">
            Confiança construída com resultados.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card bg-white p-8 rounded-3xl shadow-sm border border-brand-blue-border relative">
              <Quote className="w-10 h-10 text-brand-blue/20 absolute top-8 right-8" />
              <p className="text-lg text-brand-navy-muted italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-brand-navy">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Autoridade;
