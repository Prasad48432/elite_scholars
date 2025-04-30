import { BentoGrid } from "@/components/bentogrid";
import { HomeCarousel } from "@/components/carousel";
import Contact from "@/components/contact";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <HomeCarousel />
        <BentoGrid />
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
}
