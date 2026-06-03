import { useEffect, useState } from "react";
import { Check, CheckCheck } from "lucide-react";

export type ChatMessage = {
  from: "user" | "bot";
  text: string;
  delay?: number; // ms before typing
  typing?: number; // ms typing duration
};

interface ChatDemoProps {
  contactName: string;
  contactRole: string;
  avatarColor?: string;
  messages: ChatMessage[];
  loopKey: string | number; // changes => reset
}

export const ChatDemo = ({ contactName, contactRole, avatarColor = "hsl(var(--primary))", messages, loopKey }: ChatDemoProps) => {
  const [visible, setVisible] = useState<number>(0);
  const [typingFor, setTypingFor] = useState<"user" | "bot" | null>(null);

  useEffect(() => {
    setVisible(0);
    setTypingFor(null);
    let cancelled = false;
    let timeouts: number[] = [];

    const playFrom = (idx: number) => {
      if (cancelled) return;
      if (idx >= messages.length) {
        // restart loop after a pause
        const t = window.setTimeout(() => {
          setVisible(0);
          setTypingFor(null);
          playFrom(0);
        }, 3500);
        timeouts.push(t);
        return;
      }
      const msg = messages[idx];
      const delay = msg.delay ?? 600;
      const typingMs = msg.typing ?? (msg.from === "bot" ? 1100 : 700);

      const t1 = window.setTimeout(() => {
        if (cancelled) return;
        setTypingFor(msg.from);
        const t2 = window.setTimeout(() => {
          if (cancelled) return;
          setTypingFor(null);
          setVisible((v) => v + 1);
          playFrom(idx + 1);
        }, typingMs);
        timeouts.push(t2);
      }, delay);
      timeouts.push(t1);
    };

    playFrom(0);
    return () => {
      cancelled = true;
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [loopKey, messages]);

  const time = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <div className="card-elevated rounded-3xl overflow-hidden border border-border w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[hsl(222_40%_11%)] border-b border-border">
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-primary-foreground"
          style={{ background: avatarColor }}
        >
          {contactName.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">{contactName}</p>
          <p className="text-xs text-primary flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            {contactRole}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div
        className="p-4 space-y-2 min-h-[420px] max-h-[420px] overflow-hidden flex flex-col justify-end"
        style={{
          background:
            "repeating-linear-gradient(45deg, hsl(222 35% 7%), hsl(222 35% 7%) 10px, hsl(222 35% 8%) 10px, hsl(222 35% 8%) 20px)",
        }}
      >
        {messages.slice(0, visible).map((m, i) => (
          <div key={i} className={`animate-bubble-in flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={m.from === "user" ? "chat-bubble-user" : "chat-bubble-bot"}>
              <p className="text-sm leading-relaxed whitespace-pre-line">{m.text}</p>
              <div className="flex items-center gap-1 justify-end mt-1 opacity-70">
                <span className="text-[10px]">{time()}</span>
                {m.from === "user" && <CheckCheck className="h-3 w-3 text-primary" />}
                {m.from === "bot" && <Check className="h-3 w-3" />}
              </div>
            </div>
          </div>
        ))}

        {typingFor && (
          <div className={`flex ${typingFor === "user" ? "justify-end" : "justify-start"}`}>
            <div className={typingFor === "user" ? "chat-bubble-user" : "chat-bubble-bot"}>
              <div className="animate-typing flex gap-1 py-1">
                <span className="h-2 w-2 rounded-full bg-foreground/70" />
                <span className="h-2 w-2 rounded-full bg-foreground/70" />
                <span className="h-2 w-2 rounded-full bg-foreground/70" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
