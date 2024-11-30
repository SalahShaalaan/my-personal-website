export default function BackgroundShapes() {
  return (
    <>
      {/* Dots pattern */}
      <div className="absolute top-20 right-10 w-24 h-24 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[#4831d4] opacity-10"
          ></div>
        ))}
      </div>

      {/* Curved line */}
      <div className="absolute left-0 top-1/3 w-64 h-64 transform -translate-x-1/2">
        <div className="w-full h-full border-4 border-[#4831d4] opacity-5 rounded-full"></div>
      </div>

      {/* Zigzag pattern */}
      <div className="absolute bottom-20 right-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="opacity-10"
        >
          <path
            d="M0 50 L20 30 L40 50 L60 30 L80 50 L100 30"
            stroke="#4831d4"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
}
