import { EMPRESA, FOOTER_LINKS, whatsappLink } from "./data";
import { IconWhatsApp } from "./icons";
import { Reveal } from "./Reveal";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Reveal>
              <span className="footer__logo-wrap">
                <img
                  className="footer__logo"
                  src="/statics/images/logo.png"
                  alt="Kasa Móveis"
                  width={260}
                  height={266}
                  loading="lazy"
                />
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Móveis residenciais, estofados e colchões em Salvador/BA. Loja
                na Baixa dos Sapateiros, a poucos passos do Pelourinho e da
                Cidade Baixa.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="footer__endereco">
                {EMPRESA.endereco}
                <br />
                {EMPRESA.bairro} — {EMPRESA.cidade}/{EMPRESA.uf}, {EMPRESA.cep}
              </p>
            </Reveal>
          </div>

          {FOOTER_LINKS.map((col, i) => (
            <div key={col.title}>
              <Reveal delay={0.06 * (i + 1)}>
                <h4>{col.title}</h4>
              </Reveal>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <Reveal delay={0.12}>
              <h4>Atendimento</h4>
            </Reveal>
            <ul className="footer__links">
              <li>Seg a Sex · 9h às 18h</li>
              <li>Sáb · 10h às 14h</li>
              <li>Domingo · fechado</li>
              <li>
                <a
                  href={whatsappLink("Olá! Preciso de ajuda com um orçamento.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconWhatsApp
                    style={{
                      width: 14,
                      height: 14,
                      display: "inline",
                      verticalAlign: "-2px",
                      marginRight: 6,
                    }}
                  />
                  {EMPRESA.telefone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {ano} {EMPRESA.nomeCompleto}. Todos os direitos reservados.
          </span>
          <span>
            Site demonstrativo — <b>sem preços</b> e sem vínculo comercial.
          </span>
        </div>
      </div>
    </footer>
  );
}
