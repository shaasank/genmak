import Link from 'next/link';
import TextReveal from '../components/TextReveal';
import NumberCounter from '../components/NumberCounter';

export default function Home() {
  return (
    <div className="flex-col" style={{ width: '100%', overflow: 'hidden' }}>
      
      {/* Hero Section */}
      <section className="container flex-col justify-center" style={{ minHeight: '90vh', position: 'relative', paddingTop: '10vh' }}>
        <div style={{ maxWidth: '1000px', zIndex: 10 }}>
          <p className="label" style={{ opacity: 0.5, marginBottom: '3rem' }}>GenClosers &mdash; Sales System</p>
          <h1 style={{ marginBottom: '4rem', textWrap: 'balance' }}>
            <TextReveal text="Zero clarity to confidently closing." />
          </h1>
          <div className="flex" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <p className="text-large" style={{ maxWidth: '400px', opacity: 0.8 }}>
              Sales is a system, not a talent. Human conversation, not manipulation.
            </p>
            <p className="text-large" style={{ maxWidth: '300px', opacity: 0.6 }}>
              Sharp, systemized, confident.
            </p>
          </div>
        </div>
        
        {/* Placeholder for 3D G-mark */}
        <div style={{ position: 'absolute', top: '15%', right: '-5%', width: '50vw', height: '50vw', zIndex: -1, opacity: 0.05, mixBlendMode: 'multiply' }}>
           {/* WebGL Canvas will be rendered here */}
        </div>
      </section>

      {/* Two-track fork */}
      <h2 className="display-2" style={{ marginBottom: '6rem', maxWidth: '800px', textWrap: 'balance' }}>
        <TextReveal text="Two distinct tracks. One unified system." />
      </h2>
      <section className="flex" style={{ width: '100%', minHeight: '100vh', flexWrap: 'wrap' }}>
        
        {/* Track A: Business */}
        <div className="bg-black text-beige flex-col justify-between" style={{ flex: '1 1 50vw', padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 5vw)', borderRight: '1px solid rgba(239, 232, 218, 0.12)' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <p className="label text-red" style={{ marginBottom: '2rem' }}>Track A</p>
            <h3 className="display-3" style={{ marginBottom: '2rem' }}>
              <TextReveal text="Business Track" />
            </h3>
            <p className="text-large" style={{ marginBottom: '6rem', opacity: 0.7 }}>
              90-day program installing 7 core sales systems into your company to drive predictable revenue.
            </p>
            <div style={{ marginBottom: '6rem', borderTop: '1px solid rgba(239, 232, 218, 0.12)', paddingTop: '2rem' }}>
              <div className="label" style={{ opacity: 0.5, marginBottom: '1rem' }}>Proof of work</div>
              <div className="display-3 text-red" style={{ marginBottom: '0.5rem' }}>₹<NumberCounter end={1} />Cr+</div>
              <div className="label" style={{ opacity: 0.7 }}>Revenue in 6 months</div>
            </div>
            <Link href="/consultation" className="btn">
              Explore Consultation
            </Link>
          </div>
        </div>

        {/* Track B: Course */}
        <div className="bg-beige flex-col justify-between" style={{ flex: '1 1 50vw', padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 5vw)' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <p className="label text-red" style={{ marginBottom: '2rem' }}>Track B</p>
            <h3 className="display-3" style={{ marginBottom: '2rem' }}>
              <TextReveal text="Student Track" />
            </h3>
            <p className="text-large" style={{ marginBottom: '6rem', opacity: 0.7 }}>
              Certification course moving you from zero to graded live mock calls. Master the system.
            </p>
            <div style={{ marginBottom: '6rem', borderTop: '1px solid var(--gc-line)', paddingTop: '2rem' }}>
              <div className="label" style={{ opacity: 0.5, marginBottom: '1rem' }}>Proof of work</div>
              <div className="display-3 text-red" style={{ marginBottom: '0.5rem' }}>Coming Soon</div>
              <div className="label" style={{ opacity: 0.7 }}>Founding Cohort</div>
            </div>
            <Link href="/course" className="btn">
              Explore Certification
            </Link>
          </div>
        </div>
      </section>

      {/* Condensed Founders Strip */}
      <section className="bg-beige-dim border-t border-b">
        <div className="container py-half" style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ marginBottom: '2rem', opacity: 0.5 }}>The Partners</h3>
            <p className="text-large" style={{ maxWidth: '400px' }}>
              A partnership firm built on the premise that human conversation scales when systemized.
            </p>
          </div>
          <div className="flex-col gap-4" style={{ flex: 2, minWidth: '300px' }}>
            <div className="flex items-center gap-4 py-half border-t" style={{ borderColor: 'rgba(14,13,12,0.1)' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--gc-black)', borderRadius: '50%', flexShrink: 0 }}></div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Monish Aravind K</h3>
                <p className="label" style={{ margin: 0, opacity: 0.6 }}>Managing Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-half border-t" style={{ borderColor: 'rgba(14,13,12,0.1)' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--gc-black)', borderRadius: '50%', flexShrink: 0 }}></div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Sethuraman A</h3>
                <p className="label" style={{ margin: 0, opacity: 0.6 }}>Executive Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
