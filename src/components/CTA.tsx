'use client'

import { motion } from 'motion/react'
import { ArrowRight, Phone } from '@phosphor-icons/react'
import { Button } from './ui/Button'

export function CTA({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative py-24 bg-brand-600 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="container text-center">
        <motion.span className="text-sm font-semibold text-brand-200 tracking-widest uppercase" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Готовы сдать машину?</motion.span>
        <motion.h2 className="mt-4 text-3xl md:text-4xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Запишитесь на диагностику сегодня — скидка <span className="text-brand-200">10%</span>
        </motion.h2>
        <motion.p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          Персональный менеджер в WhatsApp/Telegram — в течение 5 минут.
        </motion.p>
        <motion.div className="mt-8 flex flex-col sm:flex-row justify-center gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <Button size="lg" onClick={onBookClick} rightIcon={<ArrowRight size={20} />}>Записать на ремонт</Button>
          <a href="tel:+790****0000" className="btn btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 gap-2">
            <Phone size={20} /> +7 (900) 000-00-00
          </a>
        </motion.div>
      </div>
    </section>
  )
}