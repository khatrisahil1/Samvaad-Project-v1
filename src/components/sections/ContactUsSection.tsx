import React, { useEffect } from 'react';

interface Props {
    onOpenModal: () => void;
}

export const ContactUsSection: React.FC<Props> = ({ onOpenModal }) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "/libs/particles/particles.min.js";
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#000000" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3 },
              line_linked: { enable: true, color: "#cccccc" },
              move: { enable: true, speed: 1 }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                repulse: { distance: 150, duration: 0.4 },
                push: { particles_nb: 8 }
              }
            },
            retina_detect: true
          });
        }
      };
      document.body.appendChild(script);
    }, []);

    return (
        <div className="relative">
          <div id="particles-js" className="absolute inset-0 z-0"></div>
          <section id="contact" className="relative z-[1] bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x800/DCC5B2/222222?text=Community')" }}>
              <div className="bg-[#fefbf6]/80 backdrop-blur-sm py-20 md:py-32">
                   <div className="container mx-auto px-6 text-center text-neutral-800">
                        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Let's Build a Better Society Together</h2>
                        <p className="text-lg mb-10 max-w-2xl mx-auto text-neutral-600">Whether you're an individual with a story, an expert with knowledge, or an organization with a cause, there's a place for you here.</p>
                        <button onClick={onOpenModal} className="bg-[#e86e38] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#ca5e2d] hover:text-white transition-all transform hover:scale-105">
                            Reach Out to Us
                        </button>
                   </div>
              </div>
          </section>
        </div>
    );
};