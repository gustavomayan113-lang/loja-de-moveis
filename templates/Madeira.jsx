import { motion } from "framer-motion";
import { AMOSTRAS, whatsappLink } from "./data";
import SmartImage from "./SmartImage";
import { Reveal, SectionHead, Stagger, StaggerItem } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

export default function Madeira() {
  return (
    <section className="section" id="madeira">
      <div className="container">
        <SectionHead
          center
          eyebrow="Linha"
          title="Móveis, estofados e colchões"
          lead="Tudo para deixar a casa perfeita em um lugar só: moveis residenciais, estofados e colchões para sala, quarto e dormitório."
        />
        <Stagger className="amostras" gap={0.08}>
          {AMOSTRAS.map((a, i) => (
            <StaggerItem
              className="amostra"
              key={a.nome}
              as={motion.article}
            >
              <div className="amostra__media">
                <SmartImage
                  src={a.image}
                  alt={`Amostra de madeira ${a.nome}`}
                  width={900}
                  height={600}
                />
                <motion.span
                  className="amostra__idx"
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: EASE }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
              </div>
              <div className="amostra__body">
                <h3>{a.nome}</h3>
                <p className="amostra__tom">{a.tom}</p>
                <p className="amostra__origem">{a.origem}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="amostras__cta">
          <p>
            Quer ver de perto? A loja fica na Baixa dos Sapateiros, em
            Salvador. Chame no WhatsApp e agende sua visita.
          </p>
          <a
            className="btn btn--ghost"
            href={whatsappLink("Olá! Gostaria de agendar uma visita na loja da Kasa Móveis.")}
            target="_blank"
            rel="noreferrer"
          >
            Agendar uma visita
          </a>
        </Reveal>
      </div>
    </section>
  );
}
