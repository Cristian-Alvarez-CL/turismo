import WhatsAppIcon from "@/components/WhatsAppIcon";
import Contact from "@/views/Contact";
import Footer from "@/views/Footer";
import Header from "@/views/Header";
import Hero from "@/views/Hero";
import Hero2 from "@/views/Hero2";
import Hero3 from "@/views/Hero3";
import Hero4 from "@/views/Hero4";
import Hero5 from "@/views/Hero5";
import Hero6 from "@/views/Hero6";
import Tours from "@/views/Tours";

export default function Home() {
  return (
    <main className="">
      <Header />
      <WhatsAppIcon />
      <Hero />
      <Tours />
      <Contact />
      <Footer />
    </main>
  );
}
