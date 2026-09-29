import { AMBIENTES, whatsappLink } from "./data";
import SmartImage from "./SmartImage";
import { Reveal, SectionHead, Stagger, StaggerItem } from "./Reveal";

export default function Ambientes() {
  return (
    <section className="section section--mist" id="ambientes">
      <div className="container">
        <SectionHead
          center
          eyebrow="Ambientes"
          title="Requintados, do jeito que a Kasa faz"
          lead="Cada projeto que começamos é uma nova história dentro de uma casa. Conheça alguns dos ambientes que fazendo parte."
        />

        <Stagger className="rooms" gap={0.08}>
          {AMBIENTES.map((ambiente) => (
            <StaggerItem as="a" className="room" key={ambiente.nome} href="#orcamento">
              <SmartImage src={ambiente.image} alt={ambiente.nome} />
              <div className="room__body">
                <span className="room__tag">Planejado</span>
                <h3>{ambiente.nome}</h3>
                <p>{ambiente.descricao}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="ambientes__cta">
          <a
            className="btn btn--primary"
            href={whatsappLink("Olá! Gostaria de ver as opções da Kasa Móveis para o meu ambiente.")}
            target="_blank"
            rel="noreferrer"
          >
            Ver todos os ambientes
          </a>
        </Reveal>
      </div>
    </section>
  );
}
