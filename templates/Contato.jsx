import { useState } from "react";
import { motion } from "framer-motion";
import { CONTATOS, EMPRESA, whatsappLink } from "./data";
import {
  IconClock,
  IconMail,
  IconPin,
  IconWhatsApp,
} from "./icons";
import { Reveal, SectionHead } from "./Reveal";

const ICONES = {
  whatsapp: IconWhatsApp,
  pin: IconPin,
  mail: IconMail,
  clock: IconClock,
};

const AMBIENTES_OPCOES = [
  "Sala de estar",
  "Sala de jantar",
  "Dormitório",
  "Cozinha",
  "Home office",
  "Varanda",
  "Outro ambiente",
];

function buildMessage({ nome, telefone, ambiente, mensagem }) {
  return [
    "Olá! Vim pelo site da Kasa Móveis e gostaria de um orçamento.",
    "",
    `*Nome:* ${nome || "não informado"}`,
    `*Telefone:* ${telefone || "não informado"}`,
    `*Ambiente:* ${ambiente}`,
    "",
    `*Mensagem:* ${mensagem || "tenho interesse em um projeto para o meu ambiente"}`,
  ].join("\n");
}

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    ambiente: AMBIENTES_OPCOES[0],
    mensagem: "",
  });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildMessage(form)), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section contact" id="orcamento">
      <div className="container">
        <div className="contact__grid">
          <div>
            <SectionHead
              eyebrow="Orçamento"
              title={`Fale com a Kasa em ${EMPRESA.cidade}`}
              lead="Preencha e você cai direto no nosso WhatsApp com tudo escrito. Sem cadastro, sem banco de dados, sem letra miúda."
            />

            <motion.ul
              className="contact__info"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {CONTATOS.map((c) => {
                const Icon = ICONES[c.tipo];
                const inner = (
                  <>
                    <span className="contact__item-ic">
                      <Icon />
                    </span>
                    <span>
                      <b>{c.titulo}</b>
                      <span>{c.texto}</span>
                    </span>
                  </>
                );
                return (
                  <motion.li
                    key={c.titulo}
                    variants={{
                      hidden: { opacity: 0, x: -14 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    {c.href ? (
                      <a
                        className="contact__item"
                        href={c.href}
                        {...(c.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="contact__item">{inner}</div>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    placeholder="Como podemos te chamar?"
                    value={form.nome}
                    onChange={update}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="telefone">Telefone / WhatsApp</label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(71) 99999-9999"
                    value={form.telefone}
                    onChange={update}
                  />
                </div>

                <div className="field field--full">
                  <label htmlFor="ambiente">Ambiente</label>
                  <select
                    id="ambiente"
                    name="ambiente"
                    value={form.ambiente}
                    onChange={update}
                  >
                    {AMBIENTES_OPCOES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field field--full">
                  <label htmlFor="mensagem">O que você tem em mente?</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Ex.: quero montar a sala com sofá de 3 lugares e uma mesa de jantar."
                    value={form.mensagem}
                    onChange={update}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="btn btn--primary btn--block form__submit"
                whileTap={{ scale: 0.97 }}
              >
                <IconWhatsApp className="btn__icon" />
                Enviar pelo WhatsApp
              </motion.button>

              <p className="form__note">
                Ao enviar, o WhatsApp abre com a mensagem pronta. Nenhum dado é
                armazenado neste site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
