import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import {
  FALLBACK_RETRY,
  FALLBACK_TITLE,
  loadErrorBoundaryTranslation,
} from './constants/error-boundary'
import { analytics } from './services/analytics'

analytics.init()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; errorKey: number; title: string; retry: string }
> {
  state = { hasError: false, errorKey: 0, title: FALLBACK_TITLE, retry: FALLBACK_RETRY }
  componentDidMount() {
    loadErrorBoundaryTranslation()
      .then(errorBoundaryTranslation => {
        this.setState(errorBoundaryTranslation)
      })
      .catch(() => {})
  }
  static getDerivedStateFromError() {
    // NOTE: errorKey is intentionally NOT reset here — it only increments on user-initiated reset
    // to force React reconciliation of the children tree
    return { hasError: true }
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, info.componentStack)
    }
  }
  handleReset = () => {
    this.setState(prev => ({ hasError: false, errorKey: prev.errorKey + 1 }))
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-[#E5D5C0] p-8 text-center">
          <div>
            <p className="text-xl mb-4">{this.state.title}</p>
            <button
              type="button"
              className="px-4 py-2 border border-[#E5D5C0]/30 rounded hover:bg-[#E5D5C0]/10 transition-colors"
              onClick={this.handleReset}
            >
              {this.state.retry}
            </button>
          </div>
        </div>
      )
    }
    return <React.Fragment key={this.state.errorKey}>{this.props.children}</React.Fragment>
  }
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  )
}
