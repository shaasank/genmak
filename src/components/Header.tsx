'use client';

import Link from 'next/link';
import { useTrack } from '../context/TrackContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { track } = useTrack();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Ensure the sticky header has a solid background matching the current track
  const bgClass = track === 'A' ? 'bg-black' : 'bg-beige';

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`border-b ${bgClass}`} style={{ height: '100px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container flex items-center justify-between" style={{ height: '100%' }}>
          
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <div style={{ color: 'var(--gc-red)', fontWeight: 'bold', fontSize: '2.5rem', fontFamily: 'var(--font-caudex)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              G.
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav items-center gap-8">
            <Link href="/about" className="label" style={{ opacity: 0.8, letterSpacing: '0.1em' }}>About</Link>
            <Link href="/consultation" className="label" style={{ opacity: track === 'A' ? 1 : 0.8, borderBottom: track === 'A' ? '1px solid currentColor' : '1px solid transparent', paddingBottom: '2px', letterSpacing: '0.1em' }}>Consultation</Link>
            <Link href="/course" className="label" style={{ opacity: track === 'B' ? 1 : 0.8, borderBottom: track === 'B' ? '1px solid currentColor' : '1px solid transparent', paddingBottom: '2px', letterSpacing: '0.1em' }}>Course</Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA */}
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn label" style={{ padding: '0.75rem 1.5rem', letterSpacing: '0.1em' }}>
              WhatsApp
            </a>
            
            {/* Mobile Hamburger Button */}
            <div className="mobile-menu-btn" onClick={toggleMenu}>
              <span style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
              <span style={{ opacity: isMobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
            </div>
          </div>
          
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '100px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--gc-beige-base)',
              color: 'var(--gc-black)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 4vw',
            }}
          >
            <nav className="flex-col gap-8 items-center" style={{ marginTop: '2rem' }}>
              <Link href="/about" onClick={closeMenu} className="display-3">About</Link>
              <Link href="/consultation" onClick={closeMenu} className="display-3" style={{ opacity: track === 'A' ? 1 : 0.6 }}>Consultation</Link>
              <Link href="/course" onClick={closeMenu} className="display-3" style={{ opacity: track === 'B' ? 1 : 0.6 }}>Course</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
