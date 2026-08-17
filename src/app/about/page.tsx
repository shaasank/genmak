import TextReveal from '../../components/TextReveal';

export default function About() {
  return (
    <div className="flex-col" style={{ width: '100%' }}>
      <section className="container py-section" style={{ maxWidth: '1200px' }}>
        <p className="label text-red" style={{ marginBottom: '3rem' }}>About Us</p>
        
        <div style={{ marginBottom: '8rem' }}>
          <h1 className="display-2" style={{ marginBottom: '4rem', maxWidth: '900px', textWrap: 'balance' }}>
            <TextReveal text="Sales is a system, not a talent." />
          </h1>
          <div className="flex-col gap-4 text-large" style={{ maxWidth: '700px', opacity: 0.8, marginLeft: 'auto' }}>
            <p>
              Most businesses operate on the flawed premise that sales relies entirely on individual charisma, innate talent, or aggressive manipulation tactics. At GenClosers, we fundamentally disagree.
            </p>
            <p>
              We believe that sales is a predictable, repeatable system. It is human conversation paired with structured logic. By removing the guesswork and hype, we install precision. We do not teach "hacks" or pressure closing. We build systems that diagnose properly, qualify ruthlessly, and close confidently.
            </p>
            <p>
              Zero clarity to confidently closing. That is the transformation we engineer for both business owners scaling their revenue and individuals mastering the skill.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige-dim border-t border-b">
        <div className="container py-section">
          <h2 className="display-3" style={{ marginBottom: '6rem' }}>
            <TextReveal text="Co-Founders" />
          </h2>
          
          <div className="flex-col gap-16">
            <div className="flex items-center gap-8" style={{ flexWrap: 'wrap' }}>
              <div style={{ width: '250px', height: '350px', backgroundColor: 'var(--gc-beige-base)', border: '1px solid var(--gc-line)' }} className="flex items-center justify-center flex-shrink-0">
                <span className="label" style={{ opacity: 0.4 }}>Photo Placeholder</span>
              </div>
              <div className="flex-col gap-2" style={{ flex: 1, minWidth: '300px' }}>
                <h3 className="display-3" style={{ marginBottom: '0.5rem' }}>
                  <TextReveal text="Monish Aravind K" />
                </h3>
                <p className="label text-red" style={{ marginBottom: '2rem' }}>Managing Partner</p>
                <p className="text-large" style={{ opacity: 0.8, maxWidth: '500px' }}>
                  [Bio coming soon]
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8" style={{ flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
              <div style={{ width: '250px', height: '350px', backgroundColor: 'var(--gc-beige-base)', border: '1px solid var(--gc-line)' }} className="flex items-center justify-center flex-shrink-0">
                <span className="label" style={{ opacity: 0.4 }}>Photo Placeholder</span>
              </div>
              <div className="flex-col gap-2" style={{ flex: 1, minWidth: '300px', alignItems: 'flex-end', textAlign: 'right' }}>
                <h3 className="display-3" style={{ marginBottom: '0.5rem' }}>
                  <TextReveal text="Sethuraman A" />
                </h3>
                <p className="label text-red" style={{ marginBottom: '2rem' }}>Executive Partner</p>
                <p className="text-large" style={{ opacity: 0.8, maxWidth: '500px' }}>
                  [Bio coming soon]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
