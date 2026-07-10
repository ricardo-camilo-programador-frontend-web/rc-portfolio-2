interface IdleRequestOptions {
  timeout?: number
}

interface Window {
  requestIdleCallback?: (callback: () => void, options?: IdleRequestOptions) => number
  cancelIdleCallback?: (handle: number) => void
  dataLayer?: Array<unknown>
}
