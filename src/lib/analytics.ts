// Evenimente de conversie GA4 (consimțământul rămâne gestionat de Consent Mode în index.html)
type GtagFn = (...args: unknown[]) => void;

export function track(event: string, params: Record<string, unknown> = {}) {
  try {
    const g = (window as unknown as { gtag?: GtagFn }).gtag;
    if (typeof g === 'function') g('event', event, params);
  } catch {
    /* analytics nu trebuie să strice niciodată site-ul */
  }
}
