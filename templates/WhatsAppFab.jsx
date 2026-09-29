import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "./data";
import { IconWhatsApp } from "./icons";

const EASE = [0.22, 1, 0.36, 1];

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          className="fab"
          href={whatsappLink("Olá! Vim pelo site da Kasa Móveis e gostaria de um orçamento.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a Kasa Móveis no WhatsApp"
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <IconWhatsApp />
          <span>Orçamento</span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
