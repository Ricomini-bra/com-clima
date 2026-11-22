import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="relative h-7 w-7" aria-hidden />
    </a>
  );
}
