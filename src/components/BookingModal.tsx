'use client'

import { motion } from 'motion/react'
import { X } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from './ui/Button'

const services = ['Плановое ТО', 'Ремонт двигателя', 'Подвеска', 'Автоэлектрика', 'Шиномонтаж', 'Замена жидкостей', 'Кондиционер', 'Кузовной ремонт']

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({ name: '', phone: '', car: '', service: '', date: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose} />
      <motion.div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}>
        <div className="sticky top-0 flex items-center justify-between p-6 border-b bg-white/80 backdrop-blur-sm">
          <h2 className="text-xl font-bold">Запись на обслуживание</h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full"><X size={24} className="text-neutral-500" /></button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-brand-600">✓</div>
            <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-neutral-600">Менеджер свяжется с вами в течение 5 минут.</p>
            <Button className="mt-6 w-full" onClick={onClose}>Отлично</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Имя" required className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
              <input type="tel" placeholder="Телефон" required className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Марка авто" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500" value={formData.car} onChange={e => setFormData(p => ({ ...p, car: e.target.value }))} />
              <select className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500" value={formData.service} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))} required>
                <option value="">Выберите услугу</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <input type="date" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500" value={formData.date} onChange={e => setFormData(p => ({ ...p, date: e.target.value }))} />
            <textarea placeholder="Комментарии" rows={3} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none" value={formData.notes} onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))} />
            <Button type="submit" className="w-full">Записаться</Button>
          </form>
        )}
      </motion.div>
    </div>
  )
}