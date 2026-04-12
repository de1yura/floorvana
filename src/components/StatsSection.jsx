import React from "react";
import { Award, Trophy, Star, MapPin } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      value: "1500+",
      label: "Projects Completed",
      bg: "bg-orange-100",
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-500" />,
      value: "15+",
      label: "Years Experience",
      bg: "bg-orange-100",
    },
    {
      icon: <Star className="w-6 h-6 text-orange-500" />,
      value: "4.9",
      label: "Trustpilot Rating",
      bg: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
                  <h3 className="text-3xl text-center pb-10 md:text-4xl font-serif gold-text">
          We do commercial & domestic floorings
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl  p-6 flex items-center gap-4 transition duration-300"
            >
              {/* Icon Box */}
              <div className={`p-3 rounded-xl ${item.bg}`}>
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold gold-text">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;