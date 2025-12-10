import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WorkMap from "@/components/WorkMap";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl px-4 flex-col gap-4 pt-20">
      <Hero />
      <Portfolio />
      <Services />
      <WorkMap />
      <Contact />
    </main>
  );
}
