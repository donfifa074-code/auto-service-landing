'use client'

import { motion } from 'motion/react'
import { useState, useRef, useEffect, FormEvent } from 'react'
import { Car, Phone, List, X, Check, Spinner } from '@phosphor-icons/react'
import { Button } from './ui/Button'

const services = [
  'Плановое ТО',
  'Ремонт двигателя',
  'Подвеска и руль',
  'Автоэлектрика',
  'Шиномонтаж',
  'Замена жидкостей',
  'Кондиционер',
  'Кузовной ремонт',
]

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: '',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const focusRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && !submitted) {
      setTimeout(() => focusRef.current?.focus(), 300)
    }
  }, [isOpen, submitted])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const validate = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = 'Введите имя'
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон'
    if (!formData.service) newErrors.service = 'Выберите услугу'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b bg-white/95 backdrop-blur-sm rounded-t-2xl">
          <h2 id="modal-title" className="text-lg font-semibold text-neutral-900">
            Запись на обслуживание
          </h2>
          <motion.button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Закрыть"
          >
            <X size={24} />
          </motion.button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <motion.div
              className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
            >
              <Check size={32} className="text-brand-600" aria-hidden="true" />
            </motion.div>
            <motion.h3
              className="text-xl font-bold text-neutral-900 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Заявка принята!
            </motion.h3>
            <motion.p
              className="text-neutral-600 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Менеджер свяжется с вами в течение 5 минут в WhatsApp или по телефону.
            </motion.p>
            <motion.button
              onClick={onClose}
              className="btn btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Отлично
            </motion.button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4" noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="name" className="label">Имя</label>
                <input
                  ref={focusRef}
                  id="name"
                  type="text"
                  placeholder="Иван"
                  className={`input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  autoComplete="name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  disabled={submitting}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.name}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="label">Телефон</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  className={`input ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  required
                  autoComplete="tel"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  disabled={submitting}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="car" className="label">Марка авто</label>
                <input
                  id="car"
                  type="text"
                  placeholder="Toyota Camry"
                  className="input"
                  value={formData.car}
                  onChange={(e) => handleChange('car', e.target.value)}
                  autoComplete="off"
                  disabled={submitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service" className="label">Услуга</label>
                <select
                  id="service"
                  className={`input appearance-none bg-white ${errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  required
                  aria-invalid={errors.service ? 'true' : 'false'}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  disabled={submitting}
                >
                  <option value="">Выберите услугу</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.service}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="label">Желаемая дата</label>
              <input
                id="date"
                type="date"
                className="input"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="label">Комментарии</label>
              <textarea
                id="notes"
                placeholder="Проблема, пожелания, удобное время..."
                rows={3}
                 className="input resize-none"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                disabled={submitting}
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full"
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 1.02 }}
              whileTap={{ scale: submitting ? 1 : 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {submitting ? (
                <>
                  <Spinner className="w-5 h-5 animate-spin" aria-hidden="true" />
                  <span>Отправляем...</span>
                </>
              ) : (
                'Записаться'
              )}
            </motion.button>

            <p className="text-xs text-neutral-500 text-center">
              Нажимая кнопку, вы соглашаетесь с&nbsp;
              <a href="#" className="underline hover:text-brand-600">обработкой данных</a>
            </p>
          </form>
        )}
      </motion.div>
    </div>
  )
}