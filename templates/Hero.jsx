import { motion, useReducedMotion } from "framer-motion";
import { EMPRESA, whatsappLink } from "./data";
import { IconCheck, IconLeaf, IconSparkle, IconWhatsApp } from "./icons";
import SmartImage from "./SmartImage";

const EASE = [0.22, 1, 0.36, 1];

const PALAVRAS = [
  { texto: "KASA", delayBase: 0.1 },
  { texto: "MÓVEIS", delayBase: 0.24 },
];

const SUBTITULO = "Deixe sua casa perfeita";

const TAGS_REAL = [
  "Móveis residenciais",
  "Estofados e colchões",
  "Entrega para Salvador",
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  });

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.span className="hero__badge" {...fadeUp(0.02)}>
            <b>Salvador</b> {EMPRESA.bairro} — Baixa dos Sapateiros
          </motion.span>

          <h1 className="hero__marca" aria-label={EMPRESA.nome}>
            <span className="sr-only">{EMPRESA.nome}</span>
            {PALAVRAS.map((palavra, pi) => (
              <span className="hero__marca-linha" key={palavra.texto} aria-hidden="true">
                {palavra.texto.split("").map((letra, i) => (
                  <motion.span
                    key={`${palavra.texto}-${i}`}
                    className="hero__marca-letra"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: "55%", rotate: 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: palavra.delayBase + i * 0.045,
                      ease: EASE,
                    }}
                  >
                    {letra === " " ? " " : letra}
                  </motion.span>
                ))}
              </span>
            ))}
            <motion.span
              className="hero__marca-barra"
              aria-hidden="true"
              initial={reduce ? { scaleX: 0 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.72, ease: EASE }}
            />
          </h1>

          <motion.p className="hero__subtitulo" {...fadeUp(0.55)}>
            {SUBTITULO}
          </motion.p>

          <motion.p className="hero__text" {...fadeUp(0.63)}>
            Móveis residenciais, estofados e colchões para deixar a sua casa
            perfeita. Estamos na Baixa dos Sapateiros, em Salvador, com
            atendimento pelo WhatsApp.
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.72)}>
            <a className="btn btn--light" href="#orcamento">
              <IconSparkle className="btn__icon" />
              Pedir orçamento
            </a>
            <a
              className="btn btn--ghost hero__ghost"
              href={whatsappLink("Olá! Vim pelo site da Kasa Móveis e quero falar com um consultor.")}
              target="_blank"
              rel="noreferrer"
            >
              <IconWhatsApp className="btn__icon" />
              WhatsApp
            </a>
          </motion.div>

          <motion.ul
            className="hero__list"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.85 } },
            }}
          >
            {TAGS_REAL.map((tag) => (
              <motion.li
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <IconCheck className="hero__list-ic" />
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hero__media"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          <div className="hero__frame">
            <SmartImage
              src="/statics/images/madeira-hero.jpg"
              alt="Sala de estar com móveis da Kasa Móveis"
              width={900}
              height={600}
              fetchpriority="high"
            />
          </div>

          <motion.span
            className="hero__chip"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Sob medida
          </motion.span>

          <motion.div
            className="hero__card"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
          >
            <span className="hero__card-ic">
              <IconLeaf />
            </span>
            <span>
              <b>Deixe sua casa perfeita</b>
              <span>Móveis, estofados e colchões</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
