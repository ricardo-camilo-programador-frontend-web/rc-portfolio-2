import type { Plugin } from 'vite'

/**
 * Vite plugin that injects CSP nonce attributes into script and style tags
 * during dev and build. The nonce value comes from an environment variable
 * VITE_CSP_NONCE (16+ random chars). If not set, a static fallback is used.
 *
 * Usage: add to vite.config.ts plugins array.
 */
export function cspNoncePlugin(): Plugin {
  let nonce: string

  return {
    name: 'csp-nonce',
    enforce: 'post',

    configResolved(_config) {
      nonce = process.env.VITE_CSP_NONCE || 'R4ND0M_N0NC3_F4LLB4CK'
    },

    transformIndexHtml(html) {
      // Add nonce to all <script> tags
      html = html.replace(/(<script[^>]*?)(\s*\/?>)/g, (match, prefix, suffix) => {
        if (prefix.includes('nonce=')) return match
        return `${prefix} nonce="${nonce}"${suffix}`
      })

      // Add nonce to all <style> tags
      html = html.replace(/(<style[^>]*?)(\s*>)/g, (match, prefix, suffix) => {
        if (prefix.includes('nonce=')) return match
        return `${prefix} nonce="${nonce}"${suffix}`
      })

      return html
    },
  }
}
