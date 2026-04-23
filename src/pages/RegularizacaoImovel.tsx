import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import SectionTag from '../components/SectionTag';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { AlertCircle, CheckCircle2, FileText, Home, TriangleAlert } from 'lucide-react';

const RegularizacaoImovel: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5531982074065";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%2C+vim+pelo+site+e+gostaria+de+uma+análise+do+meu+caso+de+Regularização+de+Imóvel.`;

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
        <title>Regularização de Imóvel | WA Advogados</title>
        <meta name="description" content="Regularize seu imóvel com segurança jurídica. Usucapião, escritura, inventário, averbação e mais. WA Advogados." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <SectionTag className="!bg-white/10 !text-white mb-8 reveal-up">Regularização de Imóvel</SectionTag>
          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight reveal-up">
            Seu imóvel não está no seu nome? A gente regulariza.
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 reveal-up">
            Escritura pendente, inventário travado, construção sem averbação, posse longa sem registro. Regularizamos o seu imóvel com segurança jurídica para que ele finalmente seja, de fato, seu.
          </p>
          <div className="reveal-up">
            <Button href={whatsappLink} isExternal variant="white">Falar com um advogado no WhatsApp</Button>
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
                Morar num imóvel não significa ser dono dele no papel.
              </h2>
              <p className="text-lg text-brand-navy-muted leading-relaxed mb-8">
                Muitas famílias moram há anos em imóveis que, no papel, não são delas. Terrenos sem escritura, casas construídas sem averbação, heranças não partilhadas, loteamentos irregulares e contratos de compra e venda que nunca viraram registro. Essa situação parece inofensiva — até que você precisa vender, financiar, dar como garantia ou transferir para um herdeiro.
              </p>
              <ul className="space-y-4">
                {[
                  "Terreno ou casa sem escritura pública",
                  "Herança não partilhada ou inventário em aberto",
                  "Construção realizada sem averbação no cartório",
                  "Posse prolongada sem registro formal de propriedade"
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
              <p className="text-lg text-brand-navy-muted leading-relaxed mb-8">
                Sem regularização, o imóvel perde valor de mercado, não pode ser financiado, não serve como garantia em empréstimos, não pode ser vendido formalmente e pode gerar disputas familiares complicadas. Em casos mais graves, existe risco de perder o bem para terceiros ou para o Estado.
              </p>
              <div className="flex items-center gap-4 text-brand-navy font-bold">
                <TriangleAlert className="w-8 h-8 text-brand-blue" />
                <span>Imóvel irregular é patrimônio em risco.</span>
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
              Do problema ao registro — cuidamos de tudo.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-12 h-12 text-brand-blue mb-6" />,
                title: "Usucapião",
                desc: "Ação judicial ou extrajudicial para reconhecer a propriedade por posse prolongada, urbana ou rural."
              },
              {
                icon: <FileText className="w-12 h-12 text-brand-blue mb-6" />,
                title: "Escritura e Registro",
                desc: "Adequação de contratos particulares de compra e venda, lavratura de escritura pública e registro em cartório."
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-brand-blue mb-6" />,
                title: "Inventário e Partilha",
                desc: "Abertura de inventário judicial ou extrajudicial, partilha de imóveis entre herdeiros e transferência definitiva."
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-brand-blue mb-6" />,
                title: "Averbação de Construção",
                desc: "Regularização de obras não averbadas junto à prefeitura e ao registro de imóveis."
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-brand-blue mb-6" />,
                title: "Retificação de Área",
                desc: "Correção de medidas e divisas incorretas na matrícula do imóvel, por via administrativa ou judicial."
              }
            ].map((sol, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-brand-blue-border reveal-up">
                {sol.icon}
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
                "Atendimento no WhatsApp — você conta a situação do imóvel",
                "Análise documental — avaliamos matrícula e o caminho mais rápido",
                "Execução — cuidamos de todo o processo até o registro final"
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4 max-w-[200px]">
                  <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xl shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-brand-navy text-center">{step}</span>
                </div>
              ))}
            </div>
            <Button href={whatsappLink} isExternal variant="primary" className="!px-12">
              Falar com especialista
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden reveal-up">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/10 rounded-full"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-white text-4xl md:text-5xl font-semibold mb-8">
                Regularize seu imóvel com segurança jurídica.
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Fale agora com a WA Advogados pelo WhatsApp.
              </p>
              <Button href={whatsappLink} isExternal variant="white" className="!px-12 !py-6 text-xl">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegularizacaoImovel;
