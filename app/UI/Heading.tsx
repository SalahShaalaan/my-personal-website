import React from "react";

interface HeadingProps {
  title: string;
  quote: string;
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  quote,
  color = "#4831d4",
}) => {
  return (
    <div className="flex flex-col items-center mb-16 relative">
      <div className="w-16 h-16 mb-6 animate-float">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ fill: color }}
        >
          <path d="M 100 0 L 0 100 L 100 200 L 200 100 L 100 0" />
          <path
            d="M 100 30 L 30 100 L 100 170 L 170 100 L 100 30"
            style={{ fill: "#fff", opacity: 0.3 }}
          />
        </svg>
      </div>
      <h2
        className="heading text-4xl md:text-5xl font-bold mb-4 relative"
        style={{ color: color }}
      >
        {title}
      </h2>
      <q
        className={`${
          color === "#4831d4" ? "text-[#3D155F]" : "text-[#ddd]"
        } italic text-lg text-center max-w-2xl`}
      >
        {quote}
      </q>
    </div>
  );
};

export default Heading;
