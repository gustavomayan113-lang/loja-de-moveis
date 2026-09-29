export const WHATSAPP_NUMBER = "557132428968";

export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const EMPRESA = {
  nome: "Kasa Móveis",
  nomeCompleto: "Kasa Móveis",
  slogan: "Deixe sua casa perfeita",
  cidade: "Salvador",
  uf: "BA",
  bairro: "Baixa dos Sapateiros",
  endereco: "Av. José Joaquim Seabra, 356",
  cep: "40025-001",
  telefone: "(71) 3242-8968",
  email: "atendimento.kasamov@gmail.com",
  site: "https://kasademoveis.wixsite.com/website",
  mapa:
    "https://www.google.com/maps/search/?api=1&query=Av.+Jos%C3%A9+Joaquim+Seabra+356+Baixa+dos+Sapateiros+Salvador+BA",
};

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Kasa", href: "#sobre" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Linha", href: "#madeira" },
  { label: "Como funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export const HIGHLIGHTS = [
  { value: 3, suffix: "", label: "linhas: residencial, estofados e colchões" },
  { value: 1, suffix: "", label: "loja física em Salvador" },
  { value: 6, suffix: " dias", label: "aberta por semana" },
  { value: 356, suffix: "", label: "Av. José Joaquim Seabra, nº 356" },
];

export const DIFFERENTIALS = [
  {
    title: "Tudo na mesma loja",
    text: "Móveis residenciais, estofados e colchões juntos. Você monta o ambiente inteiro em uma visita só.",
    icon: "sofa",
  },
  {
    title: "Na Baixa dos Sapateiros",
    text: "Ficamos na Av. José Joaquim Seabra, a poucos passos do Pelourinho e da Cidade Baixa.",
    icon: "pin",
  },
  {
    title: "Residencial e decorado",
    text: "Sofás, poltronas, camas e criados para deixar a casa pronta do seu jeito.",
    icon: "cube",
  },
  {
    title: "Atendimento local",
    text: "Loja física em Salvador: você vê, toca e senta antes de fechar o pedido.",
    icon: "truck",
  },
];

export const AMBIENTES = [
  {
    nome: "Sala de estar",
    descricao: "Sofás e poltronas estofados para o conforto do dia a dia.",
    image: "/statics/images/madeira-sala.jpg",
  },
  {
    nome: "Sala de jantar",
    descricao: "Mesas e cadeiras para os encontros que ficam na memória.",
    image: "/statics/images/madeira-jantar.jpg",
  },
  {
    nome: "Dormitório",
    descricao: "Camas, colchões e criados em madeira com acabamento cuidado.",
    image: "/statics/images/madeira-dormitorio.jpg",
  },
  {
    nome: "Cozinha",
    descricao: "Marcenaria planejada com portas em madeira e ferragens de primeira linha.",
    image: "/statics/images/madeira-cozinha.jpg",
  },
  {
    nome: "Home office",
    descricao: "Estantes e mesinhas para o trabalho em casa com espaço de sobra.",
    image: "/statics/images/madeira-escritorio.jpg",
  },
  {
    nome: "Varanda",
    descricao: "Conjuntos de varanda que aguentam sol, chuva e o uso diário.",
    image: "/statics/images/madeira-varanda.jpg",
  },
];

export const AMOSTRAS = [
  {
    nome: "Carvalho Natural",
    origem: "Tonalidade clara",
    tom: "Aconchegante e versátil",
    image: "/statics/images/madeira-amostra-1.jpg",
  },
  {
    nome: "Nogueira",
    origem: "Tonalidade média",
    tom: "Sofisticado e clássico",
    image: "/statics/images/madeira-amostra-2.jpg",
  },
  {
    nome: "Ipê Amarelo",
    origem: "Tonalidade dourada",
    tom: "Resistente e convidativo",
    image: "/statics/images/madeira-amostra-3.jpg",
  },
  {
    nome: "Freijó",
    origem: "Tonalidade quente",
    tom: "Leve e versátil",
    image: "/statics/images/madeira-amostra-4.jpg",
  },
];

export const PROCESSO = [
  {
    passo: "01",
    title: "Visita",
    text: "Você vem até a Baixa dos Sapateiros e vê a loja de perto.",
  },
  {
    passo: "02",
    title: "Escolha",
    text: "Sofa, cama, colchão ou a casa inteira: você monta o que quiser.",
  },
  {
    passo: "03",
    title: "Orçamento",
    text: "Fale com a equipe no balcão e receba a proposta no WhatsApp.",
  },
  {
    passo: "04",
    title: "Entrega",
    text: "Combinamos a entrega e levamos direto para a sua casa.",
  },
];

export const DEPOIMENTOS = [
  {
    nome: "Clélia Maria",
    ambiente: "Cliente Kasa",
    texto:
      "Comprei sofá e cama na Kasa e recebi tudo rapidinho. Equipe atenciosa, do começo ao fim. A casa ficou perfeita.",
  },
  {
    nome: "Dileta",
    ambiente: "Cliente Kasa",
    texto:
      "Fui atendida na loja na Baixa dos Sapateiros e saí de lá com o quarto inteiro resolvido. Recomendo demais.",
  },
  {
    nome: "Leila",
    ambiente: "Cliente Kasa",
    texto:
      "Preço justo,boa variedade e o pessoal ajuda a escolher sem empurrar nada. Volto sempre que preciso.",
  },
];

export const FAQ = [
  {
    pergunta: "Onde fica a loja?",
    resposta:
      "Estamos na Av. José Joaquim Seabra, 356, na Baixa dos Sapateiros, em Salvador — a poucos passos do Pelourinho e da Cidade Baixa.",
  },
  {
    pergunta: "Quais horários vocês funcionam?",
    resposta:
      "De segunda a sexta, das 9h às 18h. No sábado, das 10h às 14h. Domingo não abrimos.",
  },
  {
    pergunta: "Que tipo de móvel vocês vendem?",
    resposta:
      "Móveis residenciais, estofados e colchões. Dá para montar a sala, o quarto ou a casa inteira com a gente.",
  },
  {
    pergunta: "Como faço para pedir um orçamento?",
    resposta:
      "Preencha o formulário aqui do site ou chama direto no WhatsApp. A gente responde com a proposta.",
  },
];

export const CONTATOS = [
  {
    tipo: "whatsapp",
    titulo: "WhatsApp",
    texto: EMPRESA.telefone,
    href: whatsappLink("Olá! Vim pelo site da Kasa Móveis e gostaria de um orçamento."),
  },
  {
    tipo: "pin",
    titulo: "Endereço",
    texto: `${EMPRESA.endereco} — ${EMPRESA.bairro}`,
    href: EMPRESA.mapa,
  },
  {
    tipo: "mail",
    titulo: "E-mail",
    texto: EMPRESA.email,
    href: `mailto:${EMPRESA.email}`,
  },
  {
    tipo: "clock",
    titulo: "Horário",
    texto: "Seg a Sex 9h–18h · Sáb 10h–14h",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Navegação",
    links: NAV_LINKS.slice(0, 5),
  },
  {
    title: "Atendimento",
    links: [
      { label: EMPRESA.telefone, href: whatsappLink("Olá! Vim pelo site da Kasa Móveis.") },
      { label: EMPRESA.email, href: `mailto:${EMPRESA.email}` },
      { label: "Ver no mapa", href: EMPRESA.mapa },
    ],
  },
];
