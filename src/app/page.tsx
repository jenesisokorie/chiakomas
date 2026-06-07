import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

export default function Home(): React.JSX.Element {
  return (
    <main className="flex-1">
      <Hero />
      <About />
    </main>
  );
}