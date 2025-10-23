import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import WebVitals from '@/components/roots/WebVitals';

export default function Statistics() {
  return (
    <>
      <WebVitals />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
