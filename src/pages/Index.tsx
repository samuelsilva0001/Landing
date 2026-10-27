import { useState } from "react";
import { ChatDemo } from "@/components/ChatDemo";
import { FloatingWhatsApp, buildWhatsAppLink } from "@/components/WhatsAppButton";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { niches } from "@/data/niches";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Bot, Clock, MessageCircle, Quote, Rocket, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";
import logoRespondeAI from "@/assets/logo-respondeai.png";

const Index = () => {
  const [active, setActive] = useState(niches[0].id);
  const current = niches.find((n) => n.id === active)!;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  const openLead = (url: string) => {
    setModalUrl(url);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen text-foreground">
      <FloatingWhatsApp />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} whatsappUrl={modalUrl} />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16 py-0">
          <a href="#" className="flex items-center gap-2">
            <img
              src={logoRespondeAI}
              alt="RespondeAI - Automação de atendimento com IA"
              width={1376}
              height={768}
              className="h-16 md:h-24 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-base md:text-lg font-medium text-muted-foreground">
            <a href="#nichos" className="hover:text-foreground transition-colors">Nichos</a>
            <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
            <a href="#depoimentos" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-1.5" /> WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              IA que atende, qualifica e vende por você
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Sua <span className="text-gradient-primary">clínica, escritório ou imobiliária</span> atendendo <span className="text-gradient-primary">24/7</span> no automático.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Implemento uma IA personalizada no seu WhatsApp que <strong className="text-foreground">responde clientes na hora</strong>, agenda, qualifica leads e nunca dorme.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-7 shadow-[0_10px_40px_-5px_hsl(var(--primary)/0.4)]" onClick={() => openLead(buildWhatsAppLink("Olá RespondeAI! Quero parar de perder clientes e automatizar meu atendimento. Como funciona?"))}>
                <MessageCircle className="h-5 w-5 mr-2" />
                Quero vender mais no WhatsApp
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-7 text-base border-border">
                <a href="#nichos">
                  Ver IA em ação <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Respostas instantâneas</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Setup em até 30 dias</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> +3x mais vendas</div>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full opacity-60" />
              <div className="relative animate-float">
                <ChatDemo
                  contactName={current.contactName}
                  contactRole={current.contactRole}
                  messages={current.messages}
                  loopKey={current.id + "-hero"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="border-y border-border bg-card/30">
        <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "+200", l: "Negócios atendidos" },
            { v: "98%", l: "Taxa de resposta" },
            { v: "24/7", l: "Sempre disponível" },
            { v: "70%", l: "Menos faltas" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl md:text-4xl font-bold text-gradient-primary">{s.v}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NICHOS COM DEMO */}
      <section id="nichos" className="container py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-sm font-semibold mb-3 tracking-wider uppercase">Escolha seu nicho</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Veja a IA <span className="text-gradient-primary">atendendo de verdade</span></h2>
          <p className="text-muted-foreground text-lg">Toque no seu segmento e assista uma conversa real acontecer agora.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {niches.map((n) => {
            const isActive = n.id === active;
            return (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`group px-5 py-3 rounded-2xl font-medium text-sm transition-all border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] scale-105"
                    : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-card/80"
                }`}
              >
                <span className="text-lg mr-2">{n.emoji}</span>
                {n.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div key={current.id} className="animate-fade-up order-2 lg:order-1">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">{current.emoji} {current.label}</span>
            <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
              {current.tagline}
            </h3>
            <ul className="space-y-3 mb-8">
              {current.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => openLead(buildWhatsAppLink(`Olá RespondeAI! Tenho uma ${current.label.toLowerCase()} e quero automatizar meu atendimento. Podemos conversar?`))}>
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar com especialista agora
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <ChatDemo
              key={current.id}
              contactName={current.contactName}
              contactRole={current.contactRole}
              messages={current.messages}
              loopKey={current.id}
            />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="container py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-sm font-semibold mb-3 tracking-wider uppercase">Por que automatizar</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O que você ganha <span className="text-gradient-primary">a partir do dia 1</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Respostas rápidas", desc: "Cada lead que chega é atendido na hora — antes que ele fale com um concorrente." },
            { icon: Clock, title: "Atendimento 24/7", desc: "Sua IA não dorme, não tira folga e não esquece de responder ninguém." },
            { icon: TrendingUp, title: "Mais agendamentos", desc: "Conversão até 3x maior porque a IA conduz o lead até marcar o horário." },
            { icon: Bot, title: "Treinada para o seu negócio", desc: "Aprende seu tom de voz, seus serviços, seus preços e suas regras." },
            { icon: Shield, title: "Reduz custos com SDR", desc: "Substitui ou acelera sua equipe de pré-atendimento sem perder qualidade." },
            { icon: Rocket, title: "Implantação em até 30 dias", desc: "Da reunião à IA rodando no seu WhatsApp em até 30 dias. Sem complicação." },
          ].map((b) => (
            <div key={b.title} className="card-elevated rounded-2xl p-6 border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="depoimentos" className="container py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-sm font-semibold mb-3 tracking-wider uppercase">Simples e rápido</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Como <span className="text-gradient-primary">funciona</span></h2>
          <p className="text-muted-foreground text-lg">Do primeiro contato à IA rodando no seu WhatsApp em 3 passos.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Conversa inicial", desc: "Você nos conta sobre seu negócio, seus serviços e como atende seus clientes hoje. Entendemos suas dores e objetivos." },
            { step: "2", title: "Criamos sua IA personalizada", desc: "Treinamos a IA com seu tom de voz, preços, regras e integrações. Tudo sob medida para o seu negócio." },
            { step: "3", title: "IA no ar, vendendo por você", desc: "Ativamos no seu WhatsApp. Sua IA começa a atender, qualificar leads e agendar clientes 24 horas por dia." },
          ].map((t) => (
            <div key={t.step} className="card-elevated rounded-2xl p-7 border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">{t.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-20 lg:py-28 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold mb-3 tracking-wider uppercase">Perguntas frequentes</p>
          <h2 className="text-4xl md:text-5xl font-bold">Tire suas <span className="text-gradient-primary">dúvidas</span></h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Em quanto tempo a IA fica pronta?", a: "Depende do tamanho da empresa/projeto, más dedicamos ao máximo para a IA já está rodando no seu WhatsApp, treinada com seus serviços, preços." },
            { q: "Funciona no meu WhatsApp atual?", a: "Sim. A IA é integrada ao seu número via WhatsApp Business API oficial." },
            { q: "E se a IA não souber responder?", a: "Toda conversa pode ser direcionada por um humano da sua equipe automaticamente ou por intervenção manual." },
            { q: "Integra com minha agenda / CRM?", a: "Sim. Integramos com Google Calendar (clínicas, imobiliárias, escritórios)." },
            { q: "Quanto custa?", a: "O investimento depende do volume de atendimentos e integrações. Chame no WhatsApp para um diagnóstico e proposta personalizada." },
            { q: "As respostas são robotizadas?", a: "Não. Nós utilizamos uma linguagem natural para responder os clientes." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="card-elevated border border-border rounded-2xl px-6">
              <AccordionTrigger className="text-left hover:no-underline py-5 font-semibold">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FINAL CTA */}
      <section className="container py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl card-elevated border border-primary/30 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5 pointer-events-none" />
          <div className="absolute -top-20 -right-20 h-64 w-64 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
              Enquanto você lê isso, seus concorrentes já estão <span className="text-gradient-primary">atendendo com IA</span>.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-9 max-w-2xl mx-auto">
              Cada minuto sem responder é um cliente que fecha com outro. Fale com nosso time e descubra como a IA pode transformar seu atendimento.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-16 px-10 shadow-[0_15px_50px_-5px_hsl(var(--primary)/0.5)]" onClick={() => openLead(buildWhatsAppLink("Olá RespondeAI! Quero saber como a IA pode aumentar minhas vendas no WhatsApp."))}>
              <MessageCircle className="h-6 w-6 mr-2" />
              Quero vender mais agora
            </Button>
            <p className="text-xs text-muted-foreground mt-6">Resposta rápida • Sem compromisso</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background/50">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>© {new Date().getFullYear()} RespondeAI Automações. Todos os direitos reservados.</span>
          </div>
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Fale conosco no WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
