import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5531987169819";
const DEFAULT_MESSAGE = "Olá Samuel! Quero saber mais sobre a automação de atendimentos.";

export const buildWhatsAppLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

interface FloatingWhatsAppProps {
  onOpen: (url: string) => void;
}

export const FloatingWhatsApp = ({ onOpen }: FloatingWhatsAppProps) => {
  return (
    <button
      onClick={() => onOpen(buildWhatsAppLink())}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground font-semibold shadow-[0_10px_40px_-5px_hsl(142_70%_49%/0.5)] hover:scale-105 transition-transform animate-pulse-glow"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
      <span className="hidden sm:inline">Fale no WhatsApp</span>
    </button>
  );
};
