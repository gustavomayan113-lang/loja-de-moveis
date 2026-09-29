import { DIFFERENTIALS } from "./data";
import { DIFF_ICONS, IconCheck } from "./icons";
import SmartImage from "./SmartImage";
import { Reveal, SectionHead, Stagger, StaggerItem } from "./Reveal";

const TOPICOS = [
  "Móveis residenciais, estofados e colchões.",
  "Loja física na Baixa dos Sapateiros, em Salvador.",
  "Orçamento pelo WhatsApp, sem burocracia.",
];

export default function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__media">
            <div className="about__main">
              <SmartImage
                src="/statics/images/madeira-detalhe-1.jpg"
                alt="Bancada de madeira com veio à vista"
              />
            </div>
            <div className="about__sub">
              <SmartImage
                src="/statics/images/madeira-detalhe-2.jpg"
                alt="Detalhe do acabamento em madeira"
              />
            </div>
          </Reveal>

          <div className="about__text">
            <SectionHead
              eyebrow="A Kasa"
              title="Móveis, estofados e colchões em Salvador"
              lead="A Kasa Móveis está na Av. José Joaquim Seabra, 356, na Baixa dos Sapateiros — a poucos passos do Pelourinho e da Cidade Baixa. Uma loja física no coração do Centro Histórico para você ver, tocar e sentar antes de decidir."
            />

            <Reveal delay={0.1}>
              <ul className="about__list">
                {TOPICOS.map((t) => (
                  <li key={t}>
                    <IconCheck />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Stagger className="diffs">
              {DIFFERENTIALS.map((d) => {
                const Icon = DIFF_ICONS[d.icon];
                return (
                  <StaggerItem className="diff" key={d.title}>
                    <span className="diff__ic">
                      <Icon />
                    </span>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
