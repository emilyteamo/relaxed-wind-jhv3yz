import React, { useState } from "react";

export default function App() {
  const [visibleFact, setVisibleFact] = useState(null);

  const facts = [
    {
      title: "💰 Economic Power",
      detail:
        "Copper mining makes up nearly half of Chile's exports. It's a huge part of the country's economy and jobs!",
    },
    {
      title: "🏗️ Mining Towns",
      detail:
        "Industrialization led to new mining towns like Calama, built near mines where people moved for work.",
    },
    {
      title: "🌎 Environmental Concerns",
      detail:
        "Mining uses tons of water and electricity, which affects local ecosystems and communities.",
    },
    {
      title: "🔋 Green Future",
      detail:
        "Chile is using solar power and eco-friendly methods to make copper mining cleaner and sustainable.",
    },
    {
      title: "⛏️ Chuquicamata Mine",
      detail:
        "Chuquicamata is one of the world’s largest open-pit copper mines and is located in northern Chile. It's so big it can be seen from space!",
    },
    {
      title: "🌍 Global Leader",
      detail:
        "Chile produces over 5.6 million metric tons of copper every year—more than any other country on Earth.",
    },
  ];

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#cc6600" }}>🔍 Discover Copper Mining in Chile</h1>
      <p>Click each button to reveal a fun fact!</p>

      {facts.map((fact, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <button
            onClick={() => setVisibleFact(visibleFact === index ? null : index)}
            style={{
              padding: "0.7rem 1rem",
              backgroundColor: "#ffd966",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              textAlign: "left",
            }}
          >
            {fact.title}
          </button>
          {visibleFact === index && (
            <p
              style={{
                backgroundColor: "#f9f9f9",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginTop: "0.5rem",
              }}
            >
              {fact.detail}
            </p>
          )}
        </div>
      ))}

      <footer
        style={{
          marginTop: "2rem",
          fontSize: "0.9rem",
          color: "gray",
          textAlign: "center",
        }}
      >
        <p>
          Made for an educational project about Chile’s copper mining industry
          by <strong>Enzo Browne</strong>.
        </p>
      </footer>
    </div>
  );
}
