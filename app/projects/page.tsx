"use client";
import Projects from "./Projects";
import Tools from "./Tools";
import Services from "./Services";
import Nav from "../UI/Nav";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#4831d4] overflow-x-hidden">
      <Tools />
      <Services />
      <div className="container mx-auto px-4 py-20">
        <Projects />
      </div>
      <Nav />
    </main>
  );
}
