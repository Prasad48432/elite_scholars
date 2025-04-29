import { BentoGrid } from "@/components/bentogrid";
import { HomeCarousel } from "@/components/carousel";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <HomeCarousel />
        <BentoGrid />
      </main>
      <footer></footer>
    </div>
  );
}
