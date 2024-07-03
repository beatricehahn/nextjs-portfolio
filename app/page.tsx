import Hero from "@/components/Hero";
import QuoteBlock from "@/components/QuoteBlock";
//import Grid from "@/components/Grid";
import { SelectedContent } from "@/components/organisms/SelectedContent";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <Hero />
      <QuoteBlock />
      <SelectedContent />
    </main>
  );
}
