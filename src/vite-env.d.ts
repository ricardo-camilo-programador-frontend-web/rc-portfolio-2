/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORTFOLIO_URL: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_X_URL: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_YOUTUBE_URL: string
  readonly VITE_99FREELAS_URL: string
  readonly VITE_WORKANA_URL: string
  readonly VITE_BUYMEACOFFEE_URL: string
  readonly VITE_FACEBOOK_URL: string
  readonly VITE_FIGMA_URL: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_GTM_ID: string
  readonly VITE_COUNTER_DEV_ID: string
  readonly VITE_GEMINI_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss'
declare module '*.sass'
declare module '*.less'
