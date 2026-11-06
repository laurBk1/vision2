import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';
import { PAGE_META, NOT_FOUND_META, SITE_URL, breadcrumbSchema } from './seo';
import { faqSections } from './components/faqData';

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}

// Date SEO partajate cu scripts/prerender.mjs (un singur bundle SSR)
export const meta = { PAGE_META, NOT_FOUND_META, SITE_URL, breadcrumbSchema, faqSections };
