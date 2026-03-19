import type { FC, FormEvent, ChangeEvent } from 'react'
import { memo, useCallback, useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle, Loader2, MapPin, Phone } from 'lucide-react'

interface ContactProps {
  title: string
  subtitle: string
  description: string
  form: {
    name: string
    email: string
    subject: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
  }
  info: {
    email: string
    location: string
    phone: string
  }
  isRtl: boolean
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const Contact: FC<ContactProps> = memo(
  ({ title, subtitle, description, form, info, isRtl }) => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<FormStatus>('idle')

    const validateField = useCallback((name: string, value: string): string | undefined => {
      switch (name) {
        case 'name':
          if (!value.trim()) return 'Name is required'
          if (value.trim().length < 2) return 'Name must be at least 2 characters'
          break
        case 'email':
          if (!value.trim()) return 'Email is required'
          if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email'
          break
        case 'subject':
          if (!value.trim()) return 'Subject is required'
          if (value.trim().length < 3) return 'Subject must be at least 3 characters'
          break
        case 'message':
          if (!value.trim()) return 'Message is required'
          if (value.trim().length < 10) return 'Message must be at least 10 characters'
          break
      }
      return undefined
    }, [])

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Clear error on change
        if (errors[name as keyof FormErrors]) {
          setErrors(prev => ({ ...prev, [name]: undefined }))
        }
      },
      [errors],
    )

    const validateForm = useCallback((): boolean => {
      const newErrors: FormErrors = {}

      Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key as keyof FormData])
        if (error) {
          newErrors[key as keyof FormErrors] = error
        }
      })

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }, [formData, validateField])

    const handleSubmit = useCallback(
      async (e: FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setStatus('sending')

        try {
          // Using Formspree or similar service
          // Replace YOUR_FORM_ID with actual form ID
          const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })

          if (response.ok) {
            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
          } else {
            setStatus('error')
          }
        } catch {
          setStatus('error')
        }
      },
      [formData, validateForm],
    )

    const inputClasses = `
      w-full px-4 py-3 
      bg-[#1A1A1A] border border-white/10 
      rounded-lg text-[#E5D5C0] 
      placeholder:text-white/40 
      focus:outline-none focus:border-[#E5D5C0]/50 
      transition-colors
    `

    const errorClasses = 'border-red-500/50 focus:border-red-500'

    return (
      <section
        id="contact"
        className="py-40 px-6 bg-[#0A0A0A] scroll-mt-20"
        aria-label="Contact section"
        style={{ contain: 'layout style paint' }}
      >
        <div className="max-w-6xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8"
              style={{ willChange: 'transform' }}
            >
              {title} <br />
              <span className="italic opacity-50">{subtitle}</span>
            </h2>
            <p className="text-[#E5D5C0]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-white/5">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-serif text-[#E5D5C0] mb-2">{form.success}</h3>
                  <p className="text-white/60">I'll get back to you soon!</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 border border-[#E5D5C0]/30 rounded-full text-[#E5D5C0] text-sm hover:bg-[#E5D5C0]/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                      {form.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                      {form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm text-white/60 mb-2">
                      {form.subject} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.subject ? errorClasses : ''}`}
                      placeholder="Project Inquiry"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                      {form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClasses} resize-none ${errors.message ? errorClasses : ''}`}
                      placeholder="Tell me about your project..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-xs font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#E5D5C0] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        {form.sending}
                      </>
                    ) : (
                      <>
                        <Send size={18} aria-hidden="true" />
                        {form.submit}
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-center text-red-400 flex items-center justify-center gap-2">
                      <AlertCircle size={16} aria-hidden="true" />
                      {form.error}
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-[#111111] rounded-2xl p-6 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E5D5C0]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#E5D5C0]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">{info.email}</p>
                  <a
                    href="mailto:ricardo@example.com"
                    className="text-[#E5D5C0] hover:underline font-medium"
                  >
                    ricardo@example.com
                  </a>
                </div>
              </div>

              <div className="bg-[#111111] rounded-2xl p-6 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E5D5C0]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#E5D5C0]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">{info.phone}</p>
                  <a
                    href="tel:+5511999999999"
                    className="text-[#E5D5C0] hover:underline font-medium"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="bg-[#111111] rounded-2xl p-6 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E5D5C0]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#E5D5C0]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">{info.location}</p>
                  <p className="text-[#E5D5C0] font-medium">São Paulo, Brazil</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/40 text-sm mb-4">Prefer a quick chat?</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-white/10 text-[#E5D5C0] text-xs font-bold uppercase tracking-[0.15em] hover:bg-white/5 transition-all"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://linkedin.com/in/ricardocamilo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-white/10 text-[#E5D5C0] text-xs font-bold uppercase tracking-[0.15em] hover:bg-white/5 transition-all"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/ricardo-camilo-programador-frontend-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-white/10 text-[#E5D5C0] text-xs font-bold uppercase tracking-[0.15em] hover:bg-white/5 transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
)

Contact.displayName = 'Contact'
