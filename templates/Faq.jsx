import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ } from "./data";
import { SectionHead, Stagger, StaggerItem } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

function Item({ item, open, onToggle }) {
  return (
    <StaggerItem className="faq__item">
      <button
        type="button"
        className="faq__q"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span>{item.pergunta}</span>
        <span className="faq__icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="faq__a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="faq__a-inner">{item.resposta}</div>
          </motion.div>
        ) : null}
        </AnimatePresence>
      </StaggerItem>
    );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--mist" id="faq">
      <div className="container">
        <SectionHead
          center
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          lead="Dúvidas que sempre aparecem na loja. Se a sua não estiver aqui, é só chamar no WhatsApp."
        />

        <Stagger className="faq" gap={0.07}>
          {FAQ.map((item, i) => (
            <Item
              key={item.pergunta}
              item={item}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
