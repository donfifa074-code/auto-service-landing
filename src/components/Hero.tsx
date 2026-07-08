'use client'

import { motion } from 'motion/react'
import { Button } from './ui/Button'
import { ArrowRight, ShieldCheck, Clock, Star, Check } from '@phosphor-icons/react'

export function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow">Профессиональный автосервис</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-tight text-neutral-900">
              Честный ремонт авто <span className="text-brand-500">без сюрпризов</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-xl">
              Полный цикл услуг: от планового ТО до капитального ремонта. Оригинальные запчасти, фиксированные цены, гарантия до 2 лет.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onBookClick} rightIcon={<ArrowRight size={20} />}>Записаться</Button>
              <Button variant="secondary" size="lg">Узнать стоимость</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-600">
              <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-brand-500"/> Официальный дилер</span>
              <span className="flex items-center gap-2"><Clock size={18} className="text-brand-500"/> 8:00-20:00</span>
              <span className="flex items-center gap-2"><Star size={18} className="text-brand-500"/> Рейтинг 4.9</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              <img src="https://picsum.photos/800/600" alt="Автосервис" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
              <motion.div className="absolute -bottom-6 -left-6 p-5 bg-white rounded-2xl shadow-xl border" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <Check size={24} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Диагностика в подарок</p>
                    <p className="text-sm text-neutral-600">При ремонте от 5000₽</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}