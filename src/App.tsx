import { Credibility } from "./components/Credibility";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <Hero />
        <Services />
        <Credibility />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
