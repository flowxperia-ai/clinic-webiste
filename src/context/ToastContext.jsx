import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { CheckCircle2, Info, X, AlertTriangle } from 'lucide-react'

const ToastContext = createContext(null)

const ICONS = {
  success: CheckCircle2,
  info: Info,
  error: AlertTriangle,
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback((message, options = {}) => {
    const id = ++idRef.current
    const toast = { id, message, type: options.type || 'success', title: options.title }
    setToasts((prev) => [...prev, toast])
    window.setTimeout(() => dismiss(id), options.duration || 4500)
  }, [dismiss])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="fixed bottom-5 right-5 z-[100] flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-3"
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((t) => {
          const Icon = ICONS[t.type] || Info
          return (
            <div
              key={t.id}
              role="status"
              className="animate-[toast-in_0.25s_ease-out] flex items-start gap-3 rounded-xl border border-navy-900/10 bg-white/95 p-4 shadow-lift backdrop-blur"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
              <div className="flex-1 text-sm">
                {t.title && <p className="font-medium text-navy-950">{t.title}</p>}
                <p className="text-navy-600">{t.message}</p>
              </div>
              <button
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
                className="rounded-full p-1 text-navy-400 hover:bg-navy-900/5 hover:text-navy-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}
