import { resolveAnalyticsConfig } from '../lib/analytics/config'

/**
 * Centralized access to all runtime environment variables.
 * Every VITE_* variable is read once here so components don't
 * need to touch import.meta.env directly.
 */
export const env = {
  /** Portfolio site URL */
  portfolioUrl: import.meta.env.VITE_PORTFOLIO_URL ?? '',

  /** Social / profile URLs */
  githubUrl: import.meta.env.VITE_GITHUB_URL ?? '',
  /** GitHub profile with repositories tab pre-selected */
  githubReposUrl: `${import.meta.env.VITE_GITHUB_URL ?? ''}?tab=repositories`,
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL ?? '',
  xUrl: import.meta.env.VITE_X_URL ?? '',
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL ?? '',
  youtubeUrl: import.meta.env.VITE_YOUTUBE_URL ?? '',
  freelas99Url: import.meta.env.VITE_99FREELAS_URL ?? '',
  workanaUrl: import.meta.env.VITE_WORKANA_URL ?? '',
  buyMeACoffeeUrl: import.meta.env.VITE_BUYMEACOFFEE_URL ?? '',
  facebookUrl: import.meta.env.VITE_FACEBOOK_URL ?? '',
  figmaUrl: import.meta.env.VITE_FIGMA_URL ?? '',

  /** Contact */
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL ?? '',

  /** WhatsApp contact URL */
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL ?? '',

  /** Analytics (defaults e fallbacks legados em src/lib/analytics/config.ts) */
  analytics: resolveAnalyticsConfig({
    clarityId: import.meta.env.VITE_CLARITY_ID,
    ga4Id: import.meta.env.VITE_GA4_ID,
    legacyGaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    gtmId: import.meta.env.VITE_GTM_ID,
    gtmEnabled: import.meta.env.VITE_GTM_ENABLED,
    gtmGa4Id: import.meta.env.VITE_GTM_GA4_ID,
    counterId: import.meta.env.VITE_COUNTER_ID,
    legacyCounterDevId: import.meta.env.VITE_COUNTER_DEV_ID,
    counterUtcOffset: import.meta.env.VITE_COUNTER_UTCOFFSET,
    analyticsEnabled: import.meta.env.VITE_ANALYTICS_ENABLED,
  }),
} as const
