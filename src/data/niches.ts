import type { ChatMessage } from "@/components/ChatDemo";

export type Niche = {
  id: string;
  label: string;
  emoji: string;
  tagline: string;
  contactName: string;
  contactRole: string;
  features: string[];
  messages: ChatMessage[];
};

export const niches: Niche[] = [
  {
    id: "odonto",
    label: "Clínicas",
    emoji: "🏥",
    tagline: "Agende consultas, confirme presenças e reduza faltas em até 70%.",
    contactName: "Sorriso Odonto",
    contactRole: "IA atendendo agora",
    features: [
      "Agendamento automático integrado à sua agenda",
      "Confirmação e lembretes 24h antes da consulta",
      "Triagem inteligente por procedimento",
    ],
    messages: [
      { from: "user", text: "Oi, quero marcar uma limpeza pra essa semana", delay: 400 },
      { from: "bot", text: "Olá! 👋 Claro, posso te ajudar agora mesmo.\nTemos horários quinta às 14h ou sexta às 10h. Qual prefere?", delay: 500 },
      { from: "user", text: "Quinta às 14h tá ótimo", delay: 700 },
      { from: "bot", text: "Perfeito! ✅ Agendado: Limpeza • Quinta 14h • Dra. Camila.\nVou te lembrar 1 dia antes. Posso confirmar seu nome completo?", delay: 600 },
      { from: "user", text: "Lucas Andrade", delay: 600 },
      { from: "bot", text: "Tudo certo, Lucas! Até quinta 😊", delay: 500 },
    ],
  },
  {
    id: "nutri",
    label: "Nutrição & Emagrecimento",
    emoji: "🥗",
    tagline: "Capture leads, qualifique perfis e venda planos no automático.",
    contactName: "Nutri Vida",
    contactRole: "IA atendendo agora",
    features: [
      "Qualificação por objetivo (emagrecer, hipertrofia, saúde)",
      "Apresentação de planos e venda direta",
      "Agendamento de avaliação inicial",
    ],
    messages: [
      { from: "user", text: "Vi o anúncio. Quero emagrecer 10kg, como funciona?", delay: 400 },
      { from: "bot", text: "Que ótimo que deu o primeiro passo! 💚\nPosso te explicar em 30 segundos. Você prefere acompanhamento online ou presencial?", delay: 500 },
      { from: "user", text: "Online", delay: 600 },
      { from: "bot", text: "Perfeito! Temos o plano Transforma (12 semanas) com:\n• Avaliação completa\n• Plano alimentar personalizado\n• Acompanhamento semanal\n\nQuer agendar uma avaliação gratuita?", delay: 700 },
      { from: "user", text: "Quero sim!", delay: 500 },
      { from: "bot", text: "Top! 🎯 Te chamo na agenda agora — amanhã 19h ok?", delay: 500 },
    ],
  },
  {
    id: "advocacia",
    label: "Escritórios de Advocacia",
    emoji: "⚖️",
    tagline: "Triagem de casos 24/7 e agendamento só com leads qualificados.",
    contactName: "Costa & Advogados",
    contactRole: "IA atendendo agora",
    features: [
      "Triagem por área (trabalhista, previdenciário, cível)",
      "Coleta inicial de dados do caso",
      "Agendamento direto na agenda do advogado",
    ],
    messages: [
      { from: "user", text: "Boa tarde, fui demitido sem justa causa e queria orientação", delay: 400 },
      { from: "bot", text: "Boa tarde! Sinto pelo ocorrido. Posso te ajudar. ⚖️\nVocê chegou a receber as verbas rescisórias?", delay: 600 },
      { from: "user", text: "Recebi parte só, faltou FGTS e horas extras", delay: 700 },
      { from: "bot", text: "Entendi. Esse é um caso que normalmente conseguimos reverter.\nPosso agendar uma análise gratuita com a Dra. Helena amanhã às 15h?", delay: 700 },
      { from: "user", text: "Pode sim", delay: 500 },
      { from: "bot", text: "Agendado ✅ Vou te enviar o link e os documentos que precisa separar.", delay: 500 },
    ],
  },
  {
    id: "imobiliaria",
    label: "Imobiliárias",
    emoji: "🏢",
    tagline: "Atenda 100% dos leads na hora e nunca mais perca uma venda.",
    contactName: "Prime Imóveis",
    contactRole: "IA atendendo agora",
    features: [
      "Resposta instantânea 24/7 em todos os portais",
      "Filtro de perfil: orçamento, região, tipo",
      "Agendamento de visita com o corretor certo",
    ],
    messages: [
      { from: "user", text: "Vi o apto de 3 quartos no Jardim Europa, ainda tá disponível?", delay: 400 },
      { from: "bot", text: "Sim, está disponível! 🏠\nÉ um lindo 3 quartos, 110m², 2 vagas, R$ 780k.\nVocê busca pra morar ou investir?", delay: 600 },
      { from: "user", text: "Pra morar com a família", delay: 700 },
      { from: "bot", text: "Perfeito! Tem outras 2 opções na mesma região que talvez goste.\nQuer agendar uma visita pro fim de semana?", delay: 700 },
      { from: "user", text: "Sábado de manhã", delay: 500 },
      { from: "bot", text: "Fechado! ✅ Sábado 10h com o corretor Bruno. Te mando o endereço.", delay: 500 },
    ],
  },
];
