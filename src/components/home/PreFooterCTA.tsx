import React from 'react';

interface Props {
    onOpenModal: () => void;
}

export const PreFooterCTA: React.FC<Props> = ({ onOpenModal }) => {
    return (
      <section
        id="contact"
        className="relative bg-[#121212] py-28 md:py-36 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#879A74] opacity-30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#f5f5f4] opacity-10 rounded-full filter blur-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-md">
              Your Voice Matters — Let’s Spark the Change Together
            </h2>
            <p className="text-white/80 font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Collaborate with storytellers, activists, and visionaries to bring impactful ideas to life. We’re all ears — ready when you are.
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-3 bg-white text-[#1F2D2E] px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#f5f5f4] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m16-10V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4m16 0l-8 8-8-8" />
              </svg>
              Reach Out to Us
            </button>
          </div>
        </div>
      </section>
    );
};
