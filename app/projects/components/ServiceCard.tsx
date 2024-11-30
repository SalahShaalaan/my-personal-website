import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <div
      className={`flex ${index % 2 === 1 ? "justify-end" : "justify-start"}`}
    >
      <div className="w-full md:w-[40rem]">
        <h3 className="text-2xl md:text-5xl font-bold text-[#4831d4] mb-6 text-nowrap">
          {title}
        </h3>
        <p className="text-[#3D155F] text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
