import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { AlertCircle, CheckCircle2, Gavel, FileSearch } from 'lucide-react';

const DireitoPrevidenciario: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5531982074065";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+meu+caso+de+Direito+Previdenciário.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.reveal-up', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <Helmet>
        <title>Direito Previdenciário | WA Advogados</title>
        <meta name="description" content="Teve um benefício negado pelo INSS? Especialistas em aposentadoria, auxílio-doença, BPC/LOAS e revisão de benefícios." />
      </Helmet>

      {/* Hero Page */}
      <section className="relative pt-40 pb-20 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-previdenciario.jpg" 
            alt="Direito Previdenciário Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <SectionTag className="!bg-white/10 !text-white mb-8 reveal-up">Direito Previdenciário</SectionTag>
          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight reveal-up">
            Teve um benefício negado pelo INSS? A gente recorre.
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 reveal-up">
            Negativas administrativas não são o fim. Nossa equipe atua judicialmente para garantir o benefício que você conquistou com anos de contribuição.
          </p>
          <div className="reveal-up">
            <Button href={whatsappLink} isExternal variant="white">Falar com especialista</Button>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <SectionTag>O Cenário</SectionTag>
            <h2 className="text-3xl md:text-4xl text-brand-navy mb-6">
              Negativa do INSS não é fim de linha — é começo de processo.
            </h2>
            <p className="text-xl text-brand-navy-muted max-w-3xl mx-auto">
              Perícias mal conduzidas, cálculos subestimados e negativas administrativas injustas são mais comuns do que deveriam.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <SectionTag>O Problema</SectionTag>
              <h2 className="text-3xl md:text-4xl text-brand-navy mb-8">
                Situações que exigem atuação jurídica.
              </h2>
              <ul className="space-y-6">
                {[
                  "Negativa de auxílio-doença por perícia médica equivocada",
                  "Indeferimento de aposentadoria por idade, tempo ou especial",
                  "BPC/LOAS negado por critério de renda mal aplicado",
                  "Benefício cessado indevidamente pelo INSS"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-brand-navy-muted text-lg">
                    <AlertCircle className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-blue-light p-12 rounded-[2rem] reveal-up">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">A Consequência da Inércia</h3>
              <p className="text-lg text-brand-navy-muted leading-relaxed">
                Cada mês sem o benefício é renda perdida que pode não ser recuperada. Quem depende do INSS para viver não pode esperar. A decisão de recorrer judicialmente precisa ser rápida e bem fundamentada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="bg-brand-blue-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <SectionTag>Como Atuamos</SectionTag>
              <h2 className="text-3xl md:text-4xl text-brand-navy mb-8">
                Da negativa administrativa à concessão judicial.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Gavel className="w-10 h-10 text-brand-blue shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Ação de Concessão de Benefício</h4>
                    <p className="text-brand-navy-muted">Ajuizamos ação para concessão de aposentadoria, auxílio-doença, BPC/LOAS ou pensão negada administrativamente.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <FileSearch className="w-10 h-10 text-brand-blue shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Revisão e Recálculo</h4>
                    <p className="text-brand-navy-muted">Analisamos o histórico de contribuições para identificar erros no cálculo e buscar a revisão do valor do benefício.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-blue shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Restabelecimento de Benefício Cessado</h4>
                    <p className="text-brand-navy-muted">Atuamos para restabelecer benefícios cessados indevidamente, incluindo pedido de tutela de urgência quando necessário.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-brand-navy text-white p-12 rounded-[2rem] reveal-up">
              <h3 className="text-2xl font-bold mb-6">Por que ir à Justiça?</h3>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                O INSS nega em massa e conta com a desistência das pessoas. A via judicial reverte a maioria das negativas quando bem fundamentada.
              </p>
              <p className="text-lg text-white/60 leading-relaxed italic">
                "Cada contribuição que você fez ao longo da vida é um direito garantido. Não deixe o INSS ignorar isso."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Começar */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-up">
            <h2 className="text-3xl md:text-4xl text-brand-navy mb-12">Como começamos a resolver?</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
              {[
                "Análise do processo",
                "Fundamentação jurídica",
                "Ação e acompanhamento"
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xl">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-brand-navy">{step}</span>
                </div>
              ))}
            </div>
            <Button href={whatsappLink} isExternal variant="primary" className="!px-12">
              Falar com especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DireitoPrevidenciario;
