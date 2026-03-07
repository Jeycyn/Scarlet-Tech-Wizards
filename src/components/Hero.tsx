"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#dc2626" },
          links: {
            color: "#dc2626",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: { 
            enable: true, 
            speed: 1, 
            outModes: { default: "bounce" } 
          },
          number: { 
            value: 50,
            density: { 
              enable: true,
              // 'area' is now just a number outside or handled via width/height
              // In most v3 setups, just enabling it is enough for a balanced feel.
            } 
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}