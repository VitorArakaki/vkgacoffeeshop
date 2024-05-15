import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[100vw] flex-col items-center justify-start overflow-x-hidden bg-amber-100/100">
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </main>
  );
}
