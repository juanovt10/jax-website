import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-wrap gap-10 justify-between items-center bg-primary px-6 md:px-28 ">
      <Hero />
      <HomeServices />
    </main>
  );
}
