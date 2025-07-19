// --- MODIFIED FILE: src/pages/_app.tsx ---
// This is now our main App Shell. It wraps all pages with a consistent layout.
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header } from '@/components/global/Header'
import { Footer } from '@/components/global/Footer'
import { FloatingActionButton } from '@/components/global/FloatingActionButton'
import { ContactModal } from '@/components/modals/ContactModal'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenModal = () => setIsContactModalOpen(true);
  const handleCloseModal = () => setIsContactModalOpen(false);

  return (
    <ThemeProvider>
      <div className="bg-stone dark:bg-slate text-slate dark:text-stone flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Pass the onOpenModal prop to every page component */}
          <Component {...pageProps} onOpenModal={handleOpenModal} />
        </main>
        <Footer />
        <FloatingActionButton onClick={handleOpenModal} />
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      </div>
    </ThemeProvider>
  )
}