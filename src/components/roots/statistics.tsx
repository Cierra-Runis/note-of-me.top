import { WebVitals } from '@/components/roots/web-vitals';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Statistics() {
  return (
    <>
      <WebVitals />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
