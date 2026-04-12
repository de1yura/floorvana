import React from "react";

const FlooringHero = ({ title, subtitle, image }) => {
  return (
    <div
      className="h-[300px] md:h-[250px] flex items-center text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-orange-400 mb-2">All Flooring</p>
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default FlooringHero;