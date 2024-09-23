import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-wrap gap-10 justify-between items-center bg-primary">
      <Hero />
    </main>
  );
}
