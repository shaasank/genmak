'use client';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function TextReveal({ text, className = '', style = {} }: { text: string, className?: string, style?: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // Split on spaces but keep the spaces intact in the output or use margin
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const child: Variants = {
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", damping: 20, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  };

  return (
    <motion.div
      ref={ref}
      style={{ display: "inline-flex", flexWrap: "wrap", ...style }}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em", display: "inline-block" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
