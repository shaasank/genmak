'use client';

import Link from 'next/link';
import { useTrack } from '../context/TrackContext';

export default function Header() {
  const { track } = useTrack();
  
  // Ensure the sticky header has a solid background matching the current track
  const bgClass = track === 'A' ? 'bg-black' : 'bg-beige';

  return (
    <header className={`border-b ${bgClass}`} style={{ height: '100px', position: 'sticky', top: 0, zIndex: 50 }}>
      {/* We use a fixed gap and center alignment so the space between Logo, Nav, and WhatsApp is tightly controlled and identical, never stretching to extreme corners */}
      <div className="container flex items-center" style={{ height: '100%', gap: 'clamp(3rem, 6vw, 6rem)', justifyContent: 'center' }}>
        
        {/* Logo */}
        <Link href="/">
          <div style={{ color: 'var(--gc-red)', fontWeight: 'bold', fontSize: '2.5rem', fontFamily: 'var(--font-caudex)', letterSpacing: '-0.02em', lineHeight: 1 }}>
            G.
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link href="/about" className="label" style={{ opacity: 0.8, letterSpacing: '0.1em' }}>About</Link>
          <Link href="/consultation" className="label" style={{ opacity: track === 'A' ? 1 : 0.8, borderBottom: track === 'A' ? '1px solid currentColor' : '1px solid transparent', paddingBottom: '2px', letterSpacing: '0.1em' }}>Consultation</Link>
          <Link href="/course" className="label" style={{ opacity: track === 'B' ? 1 : 0.8, borderBottom: track === 'B' ? '1px solid currentColor' : '1px solid transparent', paddingBottom: '2px', letterSpacing: '0.1em' }}>Course</Link>
        </nav>

        {/* CTA */}
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn label" style={{ padding: '1rem 2rem', letterSpacing: '0.1em' }}>
          WhatsApp
        </a>
        
      </div>
    </header>
  );
}
