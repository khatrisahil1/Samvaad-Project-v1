import React from 'react';

interface Props {
  onClick: () => void;
}

export const FloatingActionButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-[#ffcb63] text-white rounded-full p-2 shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-110 focus:outline-none z-40"
      aria-label="Open contact form"
    >
      <img src="/samvaad-logo.svg" alt="Samvaad Logo" className="w-20 h-20" />
    </button>
  );
};
