//import Hero from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";
import IntroCards from "@/components/molecules/IntroCards";
import { SelectedContent } from "@/components/organisms/SelectedContent";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-[24px] md:mx-20">
      <Hero2 />
      <IntroCards />
      <SelectedContent />
    </main>
  );
}
