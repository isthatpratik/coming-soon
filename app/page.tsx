import Hero from "@/components/hero-section";
import Products from "@/components/products";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen grain-overlay">
      <main className="max-w-[1920px] mx-auto md:px-8 px-4 md:py-8 py-4">
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
