import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-beige border-t">
      <div className="container py-section">
        <div className="flex justify-between" style={{ flexWrap: 'wrap', gap: '4rem' }}>
          
          <div className="flex-col gap-4" style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ color: 'var(--gc-red)', fontWeight: 'bold', fontSize: '3rem', fontFamily: 'var(--font-caudex)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              G.
            </div>
            <h3 style={{ maxWidth: '400px', opacity: 0.9, marginBottom: '2rem' }}>
              Zero clarity to confidently closing.
            </h3>
            <p className="text-large" style={{ maxWidth: '350px', opacity: 0.6 }}>
              Sales is a system, not a talent.
            </p>
          </div>
          
          <div className="flex gap-16" style={{ flexWrap: 'wrap' }}>
            <div className="flex-col gap-4">
              <span className="label text-red" style={{ marginBottom: '1rem' }}>Navigate</span>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/consultation">Consultation</Link>
              <Link href="/course">Course</Link>
            </div>
            
            <div className="flex-col gap-4">
              <span className="label text-red" style={{ marginBottom: '1rem' }}>Connect</span>
              <a href="mailto:genclosers@gmail.com">genclosers@gmail.com</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t py-half" style={{ marginTop: '8rem', paddingBottom: 0, opacity: 0.4 }}>
          <span className="label">&copy; {new Date().getFullYear()} GenClosers. All rights reserved.</span>
          <span className="label">Built for Performance</span>
        </div>
      </div>
    </footer>
  );
}
