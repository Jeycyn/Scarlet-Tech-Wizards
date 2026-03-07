"use client";

import { useEffect } from "react";

export default function ParticlesBg() {
  useEffect(() => {
    // Load particles.js script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 100 },
            color: { value: ["#cf0000", "#ffcc00", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#cf0000",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1.5 },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "grab" },
            },
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="particles-js" className="absolute inset-0"></div>;
}