import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  // Props păstrate pentru compatibilitate; animația la scroll a fost eliminată intenționat.
  direction?: 'up' | 'left' | 'right' | 'fade';
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wrapper static (fără animație la scroll). Animațiile la scroll sunt păstrate
 * doar pe cartonașele din Servicii, Prețuri și Testimoniale.
 */
const Reveal = ({ children, className = '', as = 'div' }: RevealProps) => {
  const Tag = as as any;
  return <Tag className={className}>{children}</Tag>;
};

export default Reveal;
