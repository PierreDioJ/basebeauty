import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="mx-auto flex h-14 w-full max-w-7xl px-4 flex-col gap-4 pt-20">
      <Hero />
      <Portfolio />
      <Services />
    </main>
  );
}
