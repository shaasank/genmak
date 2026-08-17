'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  offset?: number;
}

export default function ParallaxWrapper({ children, className = '', style = {}, offset = 100 }: ParallaxWrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Moves the element vertically based on the scroll position
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ ...style, y }} className={className}>
      {children}
    </motion.div>
  );
}
