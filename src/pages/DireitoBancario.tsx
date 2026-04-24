import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

const DireitoBancario: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5531982074065";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+meu+caso+de+Direito+Bancário.`;

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
        <title>Direito Bancário | WA Advogados</title>
        <meta name="description" content="Defesa contra abusos bancários, juros altos e busca e apreensão. Recupere o controle da sua vida financeira." />
      </Helmet>

      {/* Hero Page */}
      <section className="relative pt-40 pb-20 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/banking_hero_bg_1777049932702.png" 
            alt="Direito Bancário Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <SectionTag className="!bg-white/10 !text-white mb-8 reveal-up">Direito Bancário</SectionTag>
          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight reveal-up">
            Está sendo cobrado indevidamente pelo banco?
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 reveal-up">
            Não aceite abusos. Nossa equipe é especialista em identificar e combater cobranças ilegais, juros abusivos e ações de busca e apreensão.
          </p>
          <div className="reveal-up">
            <Button href={whatsappLink} isExternal variant="white">Falar com especialista</Button>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <SectionTag>O Problema</SectionTag>
              <h2 className="text-3xl md:text-4xl text-brand-navy mb-8">
                Práticas abusivas que destroem seu patrimônio.
              </h2>
              <ul className="space-y-6">
                {[
                  "Juros muito acima do que foi contratado",
                  "Tarifas embutidas sem o seu consentimento",
                  "Cláusulas ilegais que dificultam a quitação",
                  "Processos de busca e apreensão precipitados"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-brand-navy-muted text-lg">
                    <AlertCircle className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-8 reveal-up">
              <div className="bg-brand-blue-light p-12 rounded-[2rem]">
                <h3 className="text-2xl font-bold text-brand-navy mb-6">A Consequência da Inércia</h3>
                <p className="text-lg text-brand-navy-muted leading-relaxed mb-8">
                  Se você não agir agora, sua dívida pode se tornar uma bola de neve imparável, levando à restrição total do seu nome e até à perda definitiva de bens conquistados com muito esforço.
                </p>
                <div className="flex items-center gap-4 text-brand-navy font-bold">
                  <TrendingUp className="w-8 h-8 text-brand-blue" />
                  <span>O tempo é seu maior inimigo em dívidas bancárias.</span>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden h-64">
                <img 
                  src="/legal_scales_desk_1776896349472.png" 
                  alt="Justiça e Direito" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="bg-brand-blue-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <SectionTag>Nossa Solução</SectionTag>
            <h2 className="text-3xl md:text-5xl text-brand-navy mb-6">
              Como a WA Advogados protege você.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ação Revisional", desc: "Analisamos cada vírgula do contrato para reduzir o valor real da sua dívida." },
              { title: "Defesa em Busca", desc: "Ações rápidas para impedir ou reverter a apreensão do seu veículo ou imóvel." },
              { title: "Repetição de Indébito", desc: "Recuperamos em dobro os valores que você pagou indevidamente ao banco." }
            ].map((sol, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-brand-blue-border reveal-up">
                <CheckCircle2 className="w-12 h-12 text-brand-blue mb-6" />
                <h4 className="text-xl font-bold text-brand-navy mb-4">{sol.title}</h4>
                <p className="text-brand-navy-muted leading-relaxed">{sol.desc}</p>
              </div>
            ))}
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
                "Análise do contrato",
                "Cálculo pericial",
                "Ação estratégica"
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

export default DireitoBancario;
