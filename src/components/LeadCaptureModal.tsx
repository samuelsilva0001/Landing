import { useState } from "react";
import { X, MessageCircle, Loader2 } from "lucide-react";

// Cole aqui a URL do seu webhook (n8n, Formspree, etc.)
// Exemplo n8n: "https://seu-n8n.com/webhook/respondeai-leads"
// Exemplo Formspree: "https://formspree.io/f/SEU_ID"
const WEBHOOK_URL = "https://formspree.io/f/xdeegyko";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

export const LeadCaptureModal = ({ isOpen, onClose, whatsappUrl }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const buildEnrichedUrl = () => {
    const base = whatsappUrl.split("?text=")[0];
    const msg = `Olá RespondeAI! Meu nome é ${name || "visitante"} e meu WhatsApp é ${phone}. Quero saber mais sobre a IA de atendimento.`;
    return `${base}?text=${encodeURIComponent(msg)}`;
  };

  const sendLead = async () => {
    if (!WEBHOOK_URL) return;
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          nome: name || "Não informado",
          telefone: phone,
          origem: "Landing Page - iarespondeai.com.br",
          data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        }),
      });
    } catch {
      // falha silenciosa — WhatsApp abre mesmo assim
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Abre o WhatsApp imediatamente (antes de qualquer await para não ser bloqueado pelo browser)
    window.open(buildEnrichedUrl(), "_blank");
    onClose();
    setName("");
    setPhone("");
    sendLead(); // dispara em background, sem aguardar
    setSubmitting(false);
  };

  const handleSkip = () => {
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-background border border-border rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="text-lg font-bold text-foreground">Um segundo antes de continuar</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Deixe seu contato — caso se perca na conversa, a gente te chama.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors ml-3 mt-0.5"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Seu nome (opcional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          <input
            type="tel"
            placeholder="Seu WhatsApp com DDD *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          <button
            type="submit"
            disabled={submitting || !phone}
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <MessageCircle className="h-4 w-4" />
            )}
            Confirmar e ir para o WhatsApp
          </button>
        </form>

        <button
          onClick={handleSkip}
          className="w-full mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
        >
          Pular — ir direto para o WhatsApp
        </button>
      </div>
    </div>
  );
};
