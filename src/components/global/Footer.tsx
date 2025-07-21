// --- MODIFIED FILE: src/components/global/Footer.tsx ---
import React from 'react';
import Link from 'next/link'; // Use Next.js Link

export const Footer: React.FC = () => {
  return (
    <>
      <img
        src="/footer-hands.png"
        alt="Decorative footer graphic"
        className="w-full h-20 object-cover"
      />
      <footer className="bg-stone-100 dark:bg-slate-800 border-t border-stone-200 dark:border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">SAMVAAD</h3>
            <p className="text-sm text-slate/80 dark:text-stone/80">From Ideas to Impact. Building a better society through better understanding.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-sage dark:hover:text-sage-light">Home</a></li>
              <li><Link href="/about" className="hover:text-sage dark:hover:text-sage-light">About Us</Link></li>
              <li><Link href="/services" className="hover:text-sage dark:hover:text-sage-light">Services</Link></li>
              <li><Link href="/blog" className="hover:text-sage dark:hover:text-sage-light">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-sage dark:hover:text-sage-light">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sage dark:hover:text-sage-light">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sage dark:hover:text-sage-light">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/company/samvaadfromideastoimpact" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75">
                {/* LinkedIn SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/samvaadfromideastoimpact/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75">
                {/* Instagram SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
              <a href="https://youtube.com/@samvaad-fromideastoimpact?si=GoaV__RHR20Mi6oV" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-75">
                {/* YouTube SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.413 3.5 12 3.5 12 3.5s-7.413 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.159 0 12 0 12s0 3.841.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.587 20.5 12 20.5 12 20.5s7.413 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.841 24 12 24 12s0-3.841-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576717783045" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75">
                {/* Facebook SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
              </a>
            </div>
            <div className="mt-4 text-sm flex items-center gap-2">
              <a href="mailto:samvaadews@gmail.com" className="hover:text-sage dark:hover:text-sage-light underline flex items-center gap-2">
                {/* Mail SVG Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v.01L12 13l8-6.99V6H4zm16 2.236l-7.447 6.492a2 2 0 01-2.106 0L4 8.236V18h16V8.236z"/>
                </svg>
                samvaadews@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 dark:border-slate-700 pt-8 text-center text-sm text-slate/60 dark:text-stone/60">
          <p>&copy; {new Date().getFullYear()} SAMVAAD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};
