import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { SelectedContent } from "@/components/organisms/SelectedContent";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <Hero />
    </main>
  );
}
