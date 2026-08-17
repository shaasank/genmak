'use client';

import { useSearchParams } from 'next/navigation';
import { useTrack } from '../../context/TrackContext';
import { useEffect, Suspense } from 'react';
import TextReveal from '../../components/TextReveal';

function ContactForm() {
  const searchParams = useSearchParams();
  const { track, setTrack } = useTrack();
  
  const queryTrack = searchParams.get('track');
  
  useEffect(() => {
    if (queryTrack === 'A' || queryTrack === 'B') {
      setTrack(queryTrack);
    }
  }, [queryTrack, setTrack]);

  const isTrackA = track === 'A';
  const isTrackB = track === 'B';

  return (
    <div className="flex-col" style={{ width: '100%' }}>
      <section className="container py-section" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="label text-red" style={{ marginBottom: '3rem' }}>Contact Us</p>
        
        {!track ? (
          <div>
            <h1 className="display-2" style={{ marginBottom: '3rem' }}>
              <TextReveal text="How can we help?" />
            </h1>
            <p className="text-large" style={{ opacity: 0.8, marginBottom: '6rem' }}>Please select your path to see the appropriate enquiry form.</p>
            <div className="flex" style={{ gap: '2rem', flexWrap: 'wrap' }}>
              <button className="btn" onClick={() => setTrack('A')}>I run a business</button>
              <button className="btn" onClick={() => setTrack('B')} style={{ backgroundColor: 'var(--gc-black)' }}>I want to learn sales</button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="display-2" style={{ marginBottom: '3rem', textWrap: 'balance' }}>
              <TextReveal text={isTrackA ? 'Business Consultation Enquiry' : 'Course Enrollment'} />
            </h1>
            <p className="text-large" style={{ opacity: 0.7, marginBottom: '6rem', maxWidth: '600px' }}>
              {isTrackA 
                ? 'Fill out the form below to apply for the 90-day sales system installation.'
                : 'Apply for the next cohort of the Sales Certification Course.'}
            </p>

            <form className="flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-col gap-2">
                <label className="label" style={{ opacity: 0.6 }}>Name</label>
                <input type="text" style={{ padding: '1.5rem', border: '1px solid var(--gc-line)', background: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: '1.125rem' }} />
              </div>
              
              <div className="flex-col gap-2">
                <label className="label" style={{ opacity: 0.6 }}>Email</label>
                <input type="email" style={{ padding: '1.5rem', border: '1px solid var(--gc-line)', background: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: '1.125rem' }} />
              </div>

              {isTrackA && (
                <>
                  <div className="flex-col gap-2">
                    <label className="label" style={{ opacity: 0.6 }}>Company Name</label>
                    <input type="text" style={{ padding: '1.5rem', border: '1px solid var(--gc-line)', background: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: '1.125rem' }} />
                  </div>
                  <div className="flex-col gap-2">
                    <label className="label" style={{ opacity: 0.6 }}>Current Monthly Revenue</label>
                    <select style={{ padding: '1.5rem', border: '1px solid var(--gc-line)', background: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: '1.125rem' }}>
                      <option value="" style={{ color: 'black' }}>Select range</option>
                      <option value="under-10l" style={{ color: 'black' }}>Under ₹10L</option>
                      <option value="10l-50l" style={{ color: 'black' }}>₹10L - ₹50L</option>
                      <option value="50l+" style={{ color: 'black' }}>₹50L+</option>
                    </select>
                  </div>
                </>
              )}

              {isTrackB && (
                <>
                  <div className="flex-col gap-2">
                    <label className="label" style={{ opacity: 0.6 }}>Current Experience Level</label>
                    <select style={{ padding: '1.5rem', border: '1px solid var(--gc-line)', background: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: '1.125rem' }}>
                      <option value="" style={{ color: 'black' }}>Select experience</option>
                      <option value="beginner" style={{ color: 'black' }}>Beginner (0 years)</option>
                      <option value="intermediate" style={{ color: 'black' }}>1-3 years</option>
                      <option value="advanced" style={{ color: 'black' }}>3+ years</option>
                    </select>
                  </div>
                </>
              )}

              <div style={{ marginTop: '2rem' }}>
                <button type="submit" className="btn">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="container py-section">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
