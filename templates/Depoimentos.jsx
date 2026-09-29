import { DEPOIMENTOS } from "./data";
import { IconStar } from "./icons";
import { SectionHead, Stagger, StaggerItem } from "./Reveal";

function iniciais(nome) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function Depoimento({ item }) {
  return (
    <StaggerItem className="quote">
      <div className="quote__stars" aria-label="Nota 5 de 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} />
        ))}
      </div>
      <p>“{item.texto}”</p>
      <div className="quote__who">
        <span className="quote__avatar" aria-hidden="true">
          {iniciais(item.nome)}
        </span>
        <span className="quote__id">
          <b>{item.nome}</b>
          <span>{item.ambiente}</span>
        </span>
      </div>
    </StaggerItem>
  );
}

export default function Depoimentos() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <SectionHead
          center
          eyebrow="Depoimentos"
          title="Quem já mobiliou a casa com a Kasa"
          lead="Clientes que confiaram no nosso time e voltaram — ou trouxeram alguém novo."
        />

        <Stagger className="quotes" gap={0.1}>
          {DEPOIMENTOS.map((item) => (
            <Depoimento key={item.nome} item={item} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
