//import Hero from "@/components/Hero";
import { Hero2 } from "@/components/HomePage/Hero2";
import IntroCards from "@/components/molecules/IntroCards";
import { SelectedContent } from "@/components/HomePage/SelectedContent";
//import { Simple } from "@/components/animations/sample-animation";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-[18px]">
      <Hero2 />
      <IntroCards />
      {/* <div className="w-full h-[300px]">
        <Simple />
      </div> */}
      <SelectedContent />
    </main>
  );
}
