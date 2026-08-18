"use client";

import { useEffect, useState } from "react";
import TextReveal from "./TextReveal";
import ParallaxWrapper from "./ParallaxWrapper";

export default function HeroText() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const middleEl = document.getElementById('middle-content');
      if (middleEl) {
        // Trigger reveal when we reach the end of the hero-scroll area (frame 114)
        // We use a small offset so it triggers just as the scroll locks into the next section
        const middleTop = middleEl.offsetTop;
        if (window.scrollY >= middleTop - 100) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initially in case they load the page already scrolled down
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      maxWidth: '1000px', 
      zIndex: 10, 
      color: '#fff'
    }}>
      {show && (
        <>
          <p className="label" style={{ opacity: 0.8, marginBottom: '3rem' }}>
            GenClosers &mdash; Sales System
          </p>
          <ParallaxWrapper offset={50}>
            <h1 style={{ marginBottom: '4rem', textWrap: 'balance' }}>
              <TextReveal text="Zero clarity to confidently closing." />
            </h1>
          </ParallaxWrapper>
          <ParallaxWrapper offset={80}>
            <div className="flex flex-wrap" style={{ gap: '2rem', alignItems: 'flex-start' }}>
              <p className="text-large" style={{ maxWidth: '400px', opacity: 0.9 }}>
                Sales is a system, not a talent. Human conversation, not manipulation.
              </p>
              <p className="text-large" style={{ maxWidth: '300px', opacity: 0.7 }}>
                Sharp, systemized, confident.
              </p>
            </div>
          </ParallaxWrapper>
        </>
      )}
    </div>
  );
}
