// src/app/page.tsx
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer/footer";
import Hero from "@/home/hero/hero";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="relative">
        {/* Section Beranda */}
        <section id="beranda">
          <Hero />
        </section>

        {/* Section Harga - Placeholder */}
        <section id="harga" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-fredoka text-3xl text-green-800 mb-8 text-center">
              Daftar Harga Sampah
            </h2>
            {/* Tambahkan konten harga di sini */}
          </div>
        </section>

        {/* Section Layanan - Placeholder */}
        <section id="layanan" className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="font-fredoka text-3xl text-green-800 mb-8 text-center">
              Layanan Kami
            </h2>
            {/* Tambahkan konten layanan di sini */}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}