export interface AnalyticsEnvSource {
  clarityId?: string | undefined
  ga4Id?: string | undefined
  legacyGaMeasurementId?: string | undefined
  gtmId?: string | undefined
  gtmEnabled?: string | undefined
  gtmGa4Id?: string | undefined
  counterId?: string | undefined
  legacyCounterDevId?: string | undefined
  counterUtcOffset?: string | undefined
  analyticsEnabled?: string | undefined
}

export interface AnalyticsConfig {
  clarityId: string
  ga4Id: string
  gtmId: string
  gtmEnabled: boolean
  gtmGa4Id: string
  counterId: string
  counterUtcOffset: string
  enabled: boolean
}

export const ANALYTICS_DEFAULTS = {
  clarityId: 'yyrpg1l7im',
  ga4Id: 'G-DLRDXGG3V1',
  gtmId: '',
  gtmEnabled: false,
  gtmGa4Id: '',
  counterId: 'f30df6f3-776d-4154-959d-0210ac8a8325',
  counterUtcOffset: '-3',
} as const

const IGNORED_VALUES = new Set(['', 'undefined', 'G-XXXXXXXXXX', 'GTM-XXXXXXX'])

function resolveValue(value: string | undefined, fallback: string): string {
  const trimmed = (value ?? '').trim()
  return trimmed !== '' && !IGNORED_VALUES.has(trimmed) ? trimmed : fallback
}

function resolveId(
  value: string | undefined,
  legacyValue: string | undefined,
  fallback: string,
): string {
  const trimmed = (value ?? '').trim()
  return trimmed !== '' && !IGNORED_VALUES.has(trimmed)
    ? trimmed
    : resolveValue(legacyValue, fallback)
}

export function resolveAnalyticsConfig(env: AnalyticsEnvSource): AnalyticsConfig {
  return {
    clarityId: resolveValue(env.clarityId, ANALYTICS_DEFAULTS.clarityId),
    ga4Id: resolveId(env.ga4Id, env.legacyGaMeasurementId, ANALYTICS_DEFAULTS.ga4Id),
    gtmId: resolveValue(env.gtmId, ANALYTICS_DEFAULTS.gtmId),
    gtmEnabled: (env.gtmEnabled ?? '').trim() === 'true',
    gtmGa4Id: resolveValue(env.gtmGa4Id, ANALYTICS_DEFAULTS.gtmGa4Id),
    counterId: resolveId(env.counterId, env.legacyCounterDevId, ANALYTICS_DEFAULTS.counterId),
    counterUtcOffset: resolveValue(env.counterUtcOffset, ANALYTICS_DEFAULTS.counterUtcOffset),
    enabled: (env.analyticsEnabled ?? '').trim() !== 'false',
  }
}
