import { useEffect, useRef, useState, CSSProperties } from 'react';

type Direction = 'up' | 'left' | 'right' | 'fade';

interface RevealOptions {
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'left':
      return `translateX(-${distance}px)`;
    case 'right':
      return `translateX(${distance}px)`;
    case 'up':
      return `translateY(${distance}px)`;
    default:
      return 'translateY(0px)';
  }
};

/**
 * Hook de reveal la scroll: elementul apare cu fade + translate (stânga/dreapta/sus)
 * atunci când intră în viewport. Odată vizibil, rămâne vizibil (nu dispare la scroll înapoi).
 */
export function useReveal({
  direction = 'up',
  distance = 40,
  duration = 0.7,
  delay = 0,
  threshold = 0.15,
}: RevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Dacă elementul e deja vizibil în viewport la mount, îl afișăm imediat (fără să aștepte scroll)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0, 0)' : offsetFor(direction, distance),
    transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
    willChange: 'opacity, transform',
  };

  return { ref, visible, style };
}
