import Header from "./templates/Header";
import Hero from "./templates/Hero";
import Destaques from "./templates/Destaques";
import Sobre from "./templates/Sobre";
import Ambientes from "./templates/Ambientes";
import Madeira from "./templates/Madeira";
import Processo from "./templates/Processo";
import Depoimentos from "./templates/Depoimentos";
import Faq from "./templates/Faq";
import Contato from "./templates/Contato";
import Footer from "./templates/Footer";
import WhatsAppFab from "./templates/WhatsAppFab";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destaques />
        <Sobre />
        <Ambientes />
        <Madeira />
        <Processo />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
