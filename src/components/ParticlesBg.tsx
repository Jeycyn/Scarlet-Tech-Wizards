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

  if (!init) return <div className="absolute inset-0 bg-[#050505]" />;

  return (
    <Particles
      id="particles-js"
      className="absolute inset-0"
      options={{
        particles: {
          number: { 
            value: 100, 
            density: { 
              enable: true,
              // In v3, 'area' is no longer valid here. 
              // It now defaults to 800x800 internally.
            } 
          },
          color: { value: ["#cf0000", "#ffcc00", "#ffffff"] },
          shape: { type: "circle" },
          opacity: { 
            value: { min: 0.1, max: 0.5 },
            animation: { enable: true, speed: 1, sync: false } 
          },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: "#cf0000",
            opacity: 0.2,
            width: 1,
          },
          move: { 
            enable: true, 
            speed: 1.5, 
            direction: "none", 
            outModes: { default: "out" } // Corrected structure for v3
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.5 } }
          }
        },
        detectRetina: true,
      }}
    />
  );
}