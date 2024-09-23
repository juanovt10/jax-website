import Hero from "@/components/Hero";
import HomeClients from "@/components/HomeClients";
import HomeProjects from "@/components/HomeProjects";
import HomeServices from "@/components/HomeServices";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-wrap gap-10 justify-between items-center bg-primary px-6 md:px-28 ">
      <div className="absolute circle z-0 top-0 left-[-20rem]"></div>
      {/* <div className="absolute circle z-0 top-[60rem] right-[-20rem]"></div> */}
      <Hero />
      <HomeServices />
      <HomeClients />
      <HomeProjects />
    </main>
  );
}
