import React from 'react';
import { useReveal } from './useReveal';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'fade';
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Componentă wrapper: animă fade + slide (stânga/dreapta/sus) când elementul
 * intră în viewport la scroll. Folosită pentru a da mișcare secțiunilor din
 * toate paginile, în același stil cu animațiile deja existente (Pricing, Process etc).
 */
const Reveal = ({
  children,
  direction = 'up',
  distance,
  duration,
  delay = 0,
  threshold,
  className = '',
  as = 'div',
}: RevealProps) => {
  const { ref, style } = useReveal({ direction, distance, duration, delay, threshold });
  const Tag = as as any;

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
