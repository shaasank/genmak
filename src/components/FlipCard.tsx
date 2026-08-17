'use client';
import { motion } from 'framer-motion';

export default function FlipCard({ children, index = 0, className = '', style = {} }: { children: React.ReactNode, index?: number, className?: string, style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -60, y: 50 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.3 }}
      style={{ perspective: 1500, transformOrigin: "bottom", ...style }}
      className={className}
    >
      <div style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
