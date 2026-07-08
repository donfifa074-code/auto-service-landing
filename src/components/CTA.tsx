'use client'

import { motion } from 'motion/react'
import { ArrowRight, Phone, Check } from '@phosphor-icons/react'
import { Button } from './ui/Button'

export function CTA({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      className="relative py-20 md:py-28 lg:py-32 bg-brand-600 text-white overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-block text-sm font-semibold text-brand-200 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Готовы сдать машину?
          </motion.span>

          <motion.h2
            id="cta-heading"
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Запишитесь на диагностику сегодня — скидка{' '}
            <span className="text-brand-200">10%</span>
          </motion.h2>

          <motion.p
            className="mt-5 text-lg md:text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Персональный менеджер в WhatsApp/Telegram — свяжется в течение 5 минут.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="flex items-center gap-2">
              <Check size={16} aria-hidden="true" />
              Без предоплаты
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} aria-hidden="true" />
              Фиксированная цена
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} aria-hidden="true" />
              Гарантия на работы
            </span>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" onClick={onBookClick} rightIcon={<ArrowRight size={20} />}>
              Записать на ремонт
            </Button>
            <a
              href="tel:+79000000000"
              className="btn btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 gap-2 px-8 py-4 text-lg"
              aria-label="Позвонить: +7 (900) 000-00-00"
            >
              <Phone size={20} aria-hidden="true" />
              +7 (900) 000-00-00
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}