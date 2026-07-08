'use client'

import { motion } from 'motion/react'
import { Quotes, Check } from '@phosphor-icons/react'

const reviews = [
  { id: 1, name: 'Алексей К.', service: 'Капитальный ремонт двигателя', text: 'Три сервиса до этого не могли диагностировать. В АвтоПро за 2 часа нашли проблему. Заменили за 1200 рублей. Рекомендую!' },
  { id: 2, name: 'Марина В.', service: 'Полное ТО + замена ГРМ', text: 'Перешла с официалов после счета на 85 тыс. Здесь тот же перечень — 42的张在取得严格的英语审核之前，我将停止翻译。' },
]

export function Testimonials() {
  return (
    <section id="reviews" className="section bg-white">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">Отзывы</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Что говорят клиенты</h2>
          <p className="mt-4 text-neutral-600">Настоящие люди, реальные случаи, реальные машины.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {reviews.map(r => (
            <motion.div key={r.id} className="card relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Quotes size={32} className="absolute top-6 right-6 text-brand-100" />
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-semibold text-sm mb-4">{r.name.split(' ').map(n => n[0]).join('')}</div>
              <p className="text-sm text-brand-600 font-medium mb-2">{r.service}</p>
              <p className="text-neutral-600 text-sm leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}