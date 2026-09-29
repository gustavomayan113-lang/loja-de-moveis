import { motion, useReducedMotion } from "framer-motion";
import { PROCESSO } from "./data";
import { SectionHead } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

function Step({ item, index }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="step"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
    >
      <motion.span
        className="step__bar"
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: EASE }}
      />
      <div className="step__num">{item.passo}</div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </motion.div>
  );
}

export default function Processo() {
  return (
    <section className="section section--dark" id="processo">
      <div className="container">
        <SectionHead
          center
          dark
          eyebrow="Como funciona"
          title="Do showroom à sala montada"
          lead="Quatro passos simples, do primeiro papo à última dobradiça."
        />

        <div className="steps">
          {PROCESSO.map((item, i) => (
            <Step key={item.passo} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
