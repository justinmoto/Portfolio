import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import About from "@/components/About";
import Works from "@/components/Works";
import Achievements from "@/components/Achievements";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#34353A] overflow-hidden">
      <NavigationBar />
      <Hero />
      <About />
      <Works />
      <Achievements />
      <Contacts />
    </main>
  );
}
