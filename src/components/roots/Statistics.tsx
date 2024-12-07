import WebVitals from '@/components/roots/WebVitals';
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
