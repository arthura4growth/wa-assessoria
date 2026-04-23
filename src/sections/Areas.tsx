import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, Briefcase, HeartHandshake, Home, ArrowRight } from 'lucide-react';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Areas: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
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
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  const areas = [
    {
      title: "Direito Bancário",
      icon: <Building2 className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-bancario",
      topics: [
        "Revisão de contratos bancários",
        "Redução e renegociação de dívidas",
        "Defesa contra busca e apreensão",
        "Repetição de indébito e juros abusivos"
      ]
    },
    {
      title: "Direito Securitário",
      icon: <ShieldCheck className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-securitario",
      topics: [
        "Negativa de cobertura de seguro",
        "Ações de indenização",
        "Defesa do consumidor perante seguradoras",
        "Sinistros não pagos ou subestimados"
      ]
    },
    {
      title: "Direito Trabalhista",
      icon: <Briefcase className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-trabalhista",
      topics: [
        "Demissões sem justa causa ou irregulares",
        "Verbas rescisórias não pagas",
        "Horas extras e adicionais devidos",
        "Assédio moral e danos morais no trabalho"
      ]
    },
    {
      title: "Direito Previdenciário",
      icon: <HeartHandshake className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/direito-previdenciario",
      topics: [
        "Benefícios negados pelo INSS",
        "Aposentadoria (idade, tempo de contribuição, especial)",
        "Auxílio-doença e auxílio-acidente",
        "Revisão de benefícios em valor incorreto"
      ]
    },
    {
      title: "Regularização de Imóvel",
      icon: <Home className="w-12 h-12 text-brand-blue mb-6" />,
      path: "/regularizacao-de-imovel",
      topics: [
        "Usucapião (urbano e rural)",
        "Escritura e registro em cartório",
        "Inventário e partilha de imóveis",
        "Regularização de construções e averbações"
      ]
    }
  ];

  return (
    <section id="areas" ref={container} className="bg-brand-blue-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTag>Áreas de atuação</SectionTag>
          <h2 className="text-4xl md:text-5xl text-brand-navy mb-6">
            Especialistas em resolver o seu problema.
          </h2>
          <p className="text-xl text-brand-navy-muted max-w-2xl mx-auto">
            Atuação estratégica focada em reestabelecer o equilíbrio entre você, bancos, seguradoras, empregadores e o INSS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {areas.map((area, index) => {
            const lgClass =
              index < 3
                ? 'lg:col-span-2'
                : index === 3
                ? 'lg:col-start-2 lg:col-span-2'
                : 'lg:col-start-4 lg:col-span-2';

            return (
              <div key={index} className={`area-card bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-brand-blue-border hover:border-brand-blue transition-colors group ${lgClass}`}>
                {area.icon}
                <h3 className="text-3xl font-semibold text-brand-navy mb-8">{area.title}</h3>
                <ul className="space-y-4 mb-12">
                  {area.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-navy-muted text-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  to={area.path}
                  className="inline-flex items-center gap-2 text-brand-navy font-bold text-lg group-hover:text-brand-blue transition-colors"
                >
                  Conhecer {area.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Areas;
