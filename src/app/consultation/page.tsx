import Link from 'next/link';
import TextReveal from '../../components/TextReveal';
import NumberCounter from '../../components/NumberCounter';
import FlipCard from '../../components/FlipCard';

export default function Consultation() {
  return (
    <div className="flex-col" style={{ width: '100%' }}>
      
      {/* Hero */}
      <section className="container py-section">
        <p className="label text-red" style={{ marginBottom: '3rem' }}>Track A &mdash; For Business Owners</p>
        <h1 className="display-1" style={{ maxWidth: '1000px', marginBottom: '4rem', textWrap: 'balance' }}>
          <TextReveal text="Sales System Consultation" />
        </h1>
        <div className="flex justify-between" style={{ flexWrap: 'wrap', gap: '4rem' }}>
          <p className="text-large" style={{ maxWidth: '600px', opacity: 0.8 }}>
            Our flagship 90-day program. We don't just advise; we install the 7 core sales systems into your company to drive predictable revenue.
          </p>
          <Link href="/contact?track=A" className="btn" style={{ alignSelf: 'flex-start' }}>
            Enquire Now
          </Link>
        </div>
      </section>

      {/* 7-System Map */}
      <section className="bg-black-soft border-t border-b py-section" style={{ position: 'relative', minHeight: '100vh' }}>
        <div className="container">
          <div className="flex justify-between items-end" style={{ marginBottom: '8rem', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 className="display-2" style={{ maxWidth: '600px', textWrap: 'balance' }}>
              <TextReveal text="The 7-System Installation" />
            </h2>
            <p className="label" style={{ opacity: 0.5 }}>Executed over 90 days</p>
          </div>
          
          <div className="flex-col gap-4">
            {['Sales Diagnosis', 'ICP & Qualification', 'Pitch Script & Call Flow', 'Objection & Follow-up Systems', 'Team Training SOP', 'Metrics & Tracking', 'Revenue Recovery'].map((sys, idx) => (
              <FlipCard key={idx} index={idx * 0.5}>
                <div className="flex gap-8 items-center py-half border-t" style={{ borderColor: 'rgba(239, 232, 218, 0.12)' }}>
                  <div className="display-3 text-red" style={{ width: '100px', flexShrink: 0 }}>
                    0{idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="display-3" style={{ marginBottom: '1rem' }}>
                      <TextReveal text={sys} />
                    </h3>
                    <p className="text-large" style={{ opacity: 0.6, maxWidth: '600px' }}>
                      Detailed breakdown of the {sys.toLowerCase()} implementation.
                    </p>
                  </div>
                </div>
              </FlipCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container py-section">
        <h2 className="display-2" style={{ marginBottom: '6rem' }}>
          <TextReveal text="Proof of Work" />
        </h2>
        
        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
          {['FitX120', 'ScreelX', 'Zorrofit'].map((brand, i) => (
            <div key={brand} className="flex-col justify-between" style={{ flex: '1 1 300px', padding: '4rem 3rem', border: '1px solid rgba(239, 232, 218, 0.12)' }}>
              <div style={{ marginBottom: '4rem' }}>
                <div className="label text-red" style={{ marginBottom: '2rem' }}>Case Study 0{i+1}</div>
                <h3 className="display-3">
                  <TextReveal text={brand} />
                </h3>
              </div>
              <div>
                <div className="display-2 text-red" style={{ marginBottom: '1rem' }}>+<NumberCounter end={120} />%</div>
                <p className="label" style={{ opacity: 0.6 }}>Revenue impact in 6 months</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black-soft py-section border-t" style={{ textAlign: 'center' }}>
        <div className="container flex-col items-center">
          <h2 className="display-2" style={{ marginBottom: '4rem' }}>
            <TextReveal text="Ready to systemize?" />
          </h2>
          <Link href="/contact?track=A" className="btn">
            Business Consultation Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
