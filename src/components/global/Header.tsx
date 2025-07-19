// --- MODIFIED FILE: src/components/global/Header.tsx ---
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '@/contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const getLinkClass = (path: string) => {
    const isActive = router.pathname === path;
    return `hover:text-sage dark:hover:text-sage-light transition-colors py-2 ${isActive ? 'text-sage dark:text-sage-light font-bold' : ''}`;
  };

  return (
    <header className="bg-stone/80 dark:bg-slate/80 backdrop-blur-lg sticky top-0 z-50 border-b border-stone-200 dark:border-slate-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif font-bold">SAMVAAD</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/about" className={getLinkClass('/about')}>About</Link>
          <Link href="/services" className={getLinkClass('/services')}>Services</Link>
          <Link href="/blog" className={getLinkClass('/blog')}>Blog</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
           <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2 rounded-full font-semibold text-white dark:text-slate shadow-md transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: '#000000',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2c64e3';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
            }}
          >
            Contact Us
          </Link>
          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-stone dark:bg-slate border-t border-stone-200 dark:border-slate-700">
           <div className="flex flex-col items-center space-y-4 py-4">
             <Link href="/" className={getLinkClass('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
             <Link href="/about" className={getLinkClass('/about')} onClick={() => setIsMenuOpen(false)}>About</Link>
             <Link href="/services" className={getLinkClass('/services')} onClick={() => setIsMenuOpen(false)}>Services</Link>
             <Link href="/blog" className={getLinkClass('/blog')} onClick={() => setIsMenuOpen(false)}>Blog</Link>
             <Link href="/contact" className={getLinkClass('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link>
           </div>
        </div>
      )}
    </header>
  );
};