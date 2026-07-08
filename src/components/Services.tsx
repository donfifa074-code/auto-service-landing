'use client'

import { motion } from 'motion/react'
import { Wrench, Engine, Car, ArrowRight, Check, Clock, Lightning } from '@phosphor-icons/react'
import { Button } from './ui/Button'

const services = [
  {
    icon: Wrench,
    title: 'Плановое ТО',
    description: 'Замена масла, фильтров, свечей. Сохраняем гарантию дилера.',
    price: 'от 2 500 ₽',
    time: '1–2 часа',
    features: ['Оригинальные масла', '47 пунктов чек-листа', 'Напоминание о ТО'],
    accent: 'brand',
  },
  {
    icon: Engine,
    title: 'Ремонт двигателя',
    description: 'От замены ГРМ до капитального ремонта. Собственный стенд.',
    price: 'от 8 000 ₽',
    time: '1–5 дней',
    features: ['Моточасовой стенд', 'Запчасти OE', 'Гарантия 2 года'],
    accent: 'brand',
  },
  {
    icon: Car,
    title: 'Подвеска и руль',
    description: 'Диагностика, замена амортизаторов, развал-схождение в подарок.',
    price: 'от 3 000 ₽',
    time: '2–4 часа',
    features: ['Стенд Hunter', 'Оригинал и аналоги', 'Проверка после'],
    accent: 'brand',
  },
  {
    icon: Lightning,
    title: 'Автоэлектрика',
    description: 'Компьютерная диагностика, ремонт проводки, чип-тюнинг.',
    price: 'от 1 500 ₽',
    time: '1–3 часа',
    features: ['Dealer сканеры', 'Осциллограф', 'Кодирование'],
    accent: 'brand',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
}

export function Services() {
  return (
    <section
      id="services"
      className="section bg-neutral-50"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <motion.div
          className="section-header max-w-2xl mx-auto text-left md:text-left lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="eyebrow">Услуги</span>
          <h2
            id="services-heading"
            className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-neutral-950 text-balance"
          >
            Полный цикл автосервиса
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed max-w-xl">
            4 ключевых направления, 150+ услуг — от планового ТО до сложного ремонта двигателя.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            <motion.article
              variants={cardVariants}
              className="lg:col-span-7 lg:row-span-2 relative overflow-hidden bg-white rounded-2xl border border-neutral-200 p-0 group"
              style={{ minHeight: '380px' }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-brand-100 to-transparent" aria-hidden="true" />
              <div className="relative h-full p-8 flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-brand-100 flex items-center justify-center mb-6">
                  <Wrench size={32} className="text-brand-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-3">
                  Плановое ТО <span className="text-brand-500">— база надёжности</span>
                </h3>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6 max-w-md">
                  Замена масла, фильтров, свечей по регламенту. Сохраняем гарантию дилера. 47 пунктов проверки.
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-4 text-sm text-neutral-500 border-t border-neutral-200 pt-4">
                  <span className="font-mono font-medium text-brand-600">от 2 500 ₽</span>
                  <span className="flex items-center gap-1"><Clock size={14} aria-hidden="true" /> 1–2 часа</span>
                </div>
                <ul className="mt-4 space-y-3" role="list">
                  {services[0].features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06 }}
                      className="flex items-start gap-3 text-sm text-neutral-600"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>

            {services.slice(1).map((s, i) => (
              <motion.article
                key={s.title}
                variants={cardVariants}
                className="lg:col-span-5 relative overflow-hidden bg-white rounded-2xl border border-neutral-200 p-6 transition-all duration-300 ease-out hover:border-brand-200 hover:shadow-lg"
                whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                  <s.icon size={26} className="text-brand-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-500 border-t border-neutral-100 pt-3 mb-4">
                  <span className="font-mono font-medium text-brand-600">{s.price}</span>
                  <span className="flex items-center gap-1"><Clock size={14} aria-hidden="true" /> {s.time}</span>
                </div>
                <ul className="space-y-2" role="list">
                  {s.features.map((f, fi) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={20} />}>
            Все услуги и цены
          </Button>
        </motion.div>
      </div>
    </section>
  )
}