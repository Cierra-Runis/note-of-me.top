import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always',
  // A list of all locales that are supported
  locales: ['en', 'zh-CN', 'ja'],
});

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { getPathname, Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
