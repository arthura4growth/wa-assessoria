import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, Briefcase, HeartHandshake, Home, ArrowRight } from 'lucide-react';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Areas: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.area-card', {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: container });

  const areas = [
    {
      title: "Direito Bancário",
      icon: <Building2 className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-bancario",
      topics: [
        "Revisão de contratos",
        "Redução de dívidas",
        "Busca e apreensão",
        "Juros abusivos"
      ]
    },
    {
      title: "Direito Securitário",
      icon: <ShieldCheck className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-securitario",
      topics: [
        "Negativa de cobertura",
        "Ações de indenização",
        "Consumidor x Seguradora",
        "Sinistros não pagos"
      ]
    },
    {
      title: "Direito Trabalhista",
      icon: <Briefcase className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-trabalhista",
      topics: [
        "Demissões irregulares",
        "Verbas rescisórias",
        "Horas extras",
        "Assédio moral"
      ]
    },
    {
      title: "Direito Previdenciário",
      icon: <HeartHandshake className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-previdenciario",
      topics: [
        "Benefícios negados",
        "Aposentadorias",
        "Auxílio-doença",
        "Revisão de benefícios"
      ]
    },
    {
      title: "Regularização de Imóveis",
      icon: <Home className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/regularizacao-de-imovel",
      topics: [
        "Usucapião",
        "Escritura e Registro",
        "Inventário de Imóveis",
        "Averbações"
      ]
    }
  ];

  return (
    <section id="areas" ref={container} className="bg-brand-blue-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionTag>Áreas de atuação</SectionTag>
            <h2 className="text-4xl md:text-5xl text-brand-navy mb-6">
              Especialistas em resolver o seu problema.
            </h2>
            <p className="text-lg text-brand-navy-muted">
              Atuação estratégica focada em reestabelecer o equilíbrio entre você e grandes instituições.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-brand-blue-border flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-brand-blue-border flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {areas.map((area, index) => (
              <div key={index} className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                <div className="area-card bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-brand-blue-border hover:border-brand-blue transition-all h-full group flex flex-col">
                  {area.icon}
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">{area.title}</h3>
                  <ul className="space-y-3 mb-10 flex-grow">
                    {area.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-navy-muted text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={area.path}
                    className="inline-flex items-center gap-2 text-brand-navy font-bold text-base group-hover:text-brand-blue transition-colors mt-auto"
                  >
                    Saiba mais
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
