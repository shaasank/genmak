'use client';

import { useTrack } from '../context/TrackContext';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { track } = useTrack();
  
  // Track A gets the dark/executive theme, Track B and default get the warm/beige theme
  const themeClass = track === 'A' ? 'bg-black text-beige' : 'bg-beige text-black';

  return (
    <div className={`${themeClass} flex-col`} style={{ minHeight: '100vh', width: '100%', transition: 'background-color 0.4s ease, color 0.4s ease' }}>
      {children}
    </div>
  );
}
