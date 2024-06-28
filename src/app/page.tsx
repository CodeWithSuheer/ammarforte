import Blogs from "@/components/Blogs";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="">
      <section id="home"><HeroSection /></section>
      <section id="home"><Intro /></section>
      <section id="stats"><StatsSection /></section>
      <section id="gallery"><Gallery /></section>
      <section id="project"><Project /></section>
      <section id="blogs"><Blogs /></section>
    </main>
  );
}
