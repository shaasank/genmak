import Link from 'next/link';
import TextReveal from '../../components/TextReveal';
import FlipCard from '../../components/FlipCard';

export default function Course() {
  return (
    <div className="flex-col" style={{ width: '100%' }}>
      
      {/* Hero */}
      <section className="container py-section">
        <p className="label text-red" style={{ marginBottom: '3rem' }}>Track B &mdash; For Students</p>
        <h1 className="display-1" style={{ maxWidth: '1000px', marginBottom: '4rem', textWrap: 'balance' }}>
          <TextReveal text="Sales Certification Course" />
        </h1>
        <div className="flex justify-between" style={{ flexWrap: 'wrap', gap: '4rem' }}>
          <p className="text-large" style={{ maxWidth: '600px', opacity: 0.8 }}>
            Move from zero clarity to confidently closing. Master the system of sales through rigorous curriculum and graded live mock calls.
          </p>
          <Link href="/contact?track=B" className="btn" style={{ alignSelf: 'flex-start' }}>
            Apply Now
          </Link>
        </div>
      </section>

      {/* Framework */}
      <section className="bg-beige-dim border-t border-b py-section">
        <div className="container">
          <div className="flex justify-between items-end" style={{ marginBottom: '8rem', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 className="display-2" style={{ maxWidth: '600px', textWrap: 'balance' }}>
              <TextReveal text="The Curriculum" />
            </h2>
            <p className="label" style={{ opacity: 0.5 }}>Three core stages</p>
          </div>
          
          <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
            {[
              { id: '01', title: 'WHAT', desc: 'Understanding the mechanics of sales, the core psychology of buyers, and the systems approach.' },
              { id: '02', title: 'WHY', desc: 'The deep diagnostic framework. Why prospects buy, and why they stall.' },
              { id: '03', title: 'HOW', desc: 'Execution. Pitching, objection handling, and closing via AI-scored assignments.' },
            ].map((stage, idx) => (
              <FlipCard key={stage.id} index={idx} className="bg-beige flex-col" style={{ flex: '1 1 300px' }}>
                <div style={{ padding: '4rem 3rem', border: '1px solid var(--gc-line)', height: '100%' }}>
                  <div className="label text-red" style={{ marginBottom: '2rem' }}>Stage {stage.id}</div>
                  <h3 className="display-3" style={{ marginBottom: '2rem' }}>
                    <TextReveal text={stage.title} />
                  </h3>
                  <p className="text-large" style={{ opacity: 0.7 }}>{stage.desc}</p>
                </div>
              </FlipCard>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="container py-section flex-col items-center text-center">
        <h2 className="display-3" style={{ marginBottom: '4rem', opacity: 0.5 }}>
          <TextReveal text="Student Outcomes" />
        </h2>
        <div className="flex-col justify-center items-center" style={{ padding: '6rem 4rem', border: '1px solid var(--gc-line)', width: '100%', maxWidth: '1000px' }}>
          <div className="display-2 text-red" style={{ marginBottom: '2rem' }}>Coming Soon</div>
          <p className="text-large" style={{ opacity: 0.7, maxWidth: '600px' }}>
            We are currently training our founding cohort. Their results and placements will be documented here.
          </p>
        </div>
      </section>

      <section className="bg-beige-dim py-section border-t" style={{ textAlign: 'center' }}>
        <div className="container flex-col items-center">
          <h2 className="display-2" style={{ marginBottom: '4rem' }}>
            <TextReveal text="Ready to master the system?" />
          </h2>
          <Link href="/contact?track=B" className="btn">
            Course Enrollment
          </Link>
        </div>
      </section>
    </div>
  );
}
