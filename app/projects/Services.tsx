import React from "react";
import BackgroundShapes from "./components/BackgroundShapes";
import ServiceCard from "./components/ServiceCard";
import Heading from "../UI/Heading";

export default function Services() {
  const services = [
    {
      title: "Front-End Web Development",
      description:
        "I'm the guy who builds the front-end of websites and web applications. I make sure everything looks great, is easy to use, and works smoothly on different devices. It's all about creating a great user experience.",
    },
    {
      title: "Enhance User Experience",
      description:
        "I make sure everything feels easy and fun to use. Smooth navigation, nice animations, and everything running without any hiccups. It’s all about keeping the vibe chill and making sure users enjoy every second they spend on the app or website.",
    },
    {
      title: "Back End Integration",
      description:
        "I handle the connection between the front end and back end, so data flows smoothly, securely, and everything just works like it should by collaborating with the back-end team.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#f9f9f9] overflow-hidden py-20">
      <BackgroundShapes />
      <div className="container mx-auto px-4 relative z-10">
        <Heading
          title="What I'm Doing"
          quote="Coding Is Something i enjoy"
          color="#4831d4"
        />

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        <BackgroundShapes />
      </div>
    </section>
  );
}
