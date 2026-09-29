import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { HIGHLIGHTS } from "./data";

const EASE = [0.22, 1, 0.36, 1];

function useCountUp(target, active, duration = 1500) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return undefined;
    if (reduce) {
      setValue(target);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration, reduce]);

  return value;
}

function Stat({ value, suffix, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const current = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      className="stat"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
    >
      <div className="stat__value">
        {current.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="stat__label">{label}</div>
    </motion.div>
  );
}

export default function Destaques() {
  return (
    <section className="section section--mist" aria-label="Números da Kasa Móveis">
      <div className="container">
        <div className="stats">
          {HIGHLIGHTS.map((item, i) => (
            <Stat key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
