import NotFoundPage from '@/components/roots/NotFoundPage';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/layout.tsx` receives.
export default function GlobalNotFound() {
  return <NotFoundPage />;
}
