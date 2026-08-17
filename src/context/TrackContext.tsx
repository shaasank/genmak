'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export type Track = 'A' | 'B' | null;

interface TrackContextType {
  track: Track;
  setTrack: (track: Track) => void;
}

const TrackContext = createContext<TrackContextType | undefined>(undefined);

export function TrackProvider({ children }: { children: ReactNode }) {
  const [track, setTrack] = useState<Track>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Auto-detect track based on pathname
    if (pathname.includes('/consultation')) {
      setTrack('A');
    } else if (pathname.includes('/course')) {
      setTrack('B');
    } else if (pathname.includes('/about') || pathname === '/') {
      setTrack(null);
    }
  }, [pathname]);

  return (
    <TrackContext.Provider value={{ track, setTrack }}>
      {children}
    </TrackContext.Provider>
  );
}

export function useTrack() {
  const context = useContext(TrackContext);
  if (context === undefined) {
    throw new Error('useTrack must be used within a TrackProvider');
  }
  return context;
}
