import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function App() {
  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <Header />
      <main>
        <Hero />
        <Features />

        <Pricing />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}

export default App;
