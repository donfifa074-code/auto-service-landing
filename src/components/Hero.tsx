'use client'

import { motion } from 'motion/react'
import { Button } from './ui/Button'
import { ArrowRight, ShieldCheck, Clock, Star } from '@phosphor-icons/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
}

export function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content - Left aligned, not centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:pr-8"
          >
            <motion.span
              variants={itemVariants}
              className="eyebrow"
            >
              Профессиональный автосервис
            </motion.span>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tighter text-neutral-950 text-balance"
            >
              Честный ремонт авто&nbsp;<span className="text-brand-500">без сюрпризов</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed text-pretty"
            >
              Полный цикл услуг: от планового ТО до капитального ремонта. Оригинальные запчасти, фиксированные цены, гарантия до 2 лет.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={onBookClick} rightIcon={<ArrowRight size={20} />}>
                Записаться на обслуживание
              </Button>
              <Button variant="secondary" size="lg">
                Узнать стоимость
              </Button>
            </motion.div>

            {/* Trust indicators - single row, clean */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center gap-8 text-sm text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-brand-500" aria-hidden="true" />
                <span>Официальный дилер</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-brand-500" aria-hidden="true" />
                <span>8:00–20:00 ежедневно</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-brand-500" aria-hidden="true" />
                <span>Рейтинг 4.9 на картах</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual - Asymmetric, prominent */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Main image with layered depth */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl" aria-hidden="true" />
              <img
                src="https://picsum.photos/seed/autopro-hero/800/600"
                alt="Современный автосервис АвтоПро — чистые боксы, профессиональное оборудование"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-neutral-200"
                loading="eager"
                fetchPriority="high"
              />

              {/* Floating badge - origin-aware animation */}
              <motion.div
                className="absolute -bottom-6 -left-6 lg:-left-8 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200"
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Диагностика в подарок</p>
                    <p className="text-sm text-neutral-600">При ремонте от 5000₽</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary floating stat */}
              <motion.div
                className="absolute top-4 right-4 lg:top-auto lg:bottom-4 lg:right-8 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
                    <Star size={16} className="text-brand-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">4.9</p>
                    <p className="text-xs text-neutral-500">Google Maps</p>
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
