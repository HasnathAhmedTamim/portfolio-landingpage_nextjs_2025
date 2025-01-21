import { Hero } from "@/components";
import Banner from "@/components/Banner";
import ProjectSection from "@/components/ProjectSection";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="overflow-hidden">
        <Banner></Banner>
        <Hero></Hero>

        <ProjectSection></ProjectSection>
        <TestimonialSection></TestimonialSection>
      </main>

    </div>
  );
}
