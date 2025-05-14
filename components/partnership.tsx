import React from "react";

export default function Partnership() {
  const partners = [
    { id: 1, name: "GILGAMESH*" },
    { id: 2, name: "GILGAMESH*" },
    { id: 3, name: "GILGAMESH*" },
    { id: 4, name: "GILGAMESH*" },
    { id: 5, name: "TOTB+" },
  ];

  return (
    <section className="container mx-auto px-4 py-16 font-oswald">
      <h2 className="text-5xl font-light text-pink-500 text-center mb-12 font-xanh">
        Partnership
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {partners.map((partner) => (
          <div key={partner.id} className="flex items-center justify-center">
            {partner.name === "TOTB+" ? (
              <div className="flex items-center">
                <div className="h-8 w-8 bg-black dark:bg-white mr-2 clip-hexagon"></div>
                <span className="text-lg font-bold">{partner.name}</span>
              </div>
            ) : (
              <span className="text-lg font-bold">{partner.name}</span>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
      `}</style>
    </section>
  );
}
