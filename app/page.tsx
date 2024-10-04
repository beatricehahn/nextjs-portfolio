//import Hero from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";
import IntroCards from "@/components/molecules/IntroCards";
import { SelectedContent } from "@/components/organisms/SelectedContent";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-[18px]">
      <Hero2 />
      <IntroCards />
      <SelectedContent />
    </main>
  );
}
