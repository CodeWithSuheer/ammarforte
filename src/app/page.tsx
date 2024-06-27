import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="">
      <section id="home"><HeroSection /></section>
      <section id="stats"><StatsSection /></section>
    </main>
  );
}
