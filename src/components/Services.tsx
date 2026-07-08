'use client'

import { motion } from 'motion/react'
import { Wrench, Engine, Car, ArrowRight, Check, Clock } from '@phosphor-icons/react'
import { Button } from './ui/Button'

const services = [
  { icon: Wrench, title: 'Плановое ТО', description: 'Замена масла, фильтров, свечей. Сохраняем гарантию дилера.', price: 'от 2 500 ₽', time: '1-2 часа', features: ['Оригинальные масла', '47 пунктов чек-листа', 'Напоминание о ТО'] },
  { icon: Engine, title: 'Ремонт двигателя', description: 'От замены ГРМ до капитального ремонта. Собственный стенд.', price: 'от 8 000 ₽', time: '1-5 дней', features: ['Моточасовой стенд', 'Запчасти OE', 'Гарантия 2 года'] },
  { icon: Car, title: 'Подвеска', description: 'Диагностика, замена амортизаторов, развал-схождение в подарок.', price: 'от 3 000 ₽', time: '2-4 часа', features: ['Стенд Hunter', 'Оригинал и аналоги', 'Проверка после'] },
  { icon: Engine, title: 'Автоэлектрика', description: 'Компьютерная диагностика, ремонт проводки, чип-тюнинг.', price: 'от 1 500 ₽', time: '1-3 часа', features: ['Dealer сканеры', 'Осциллограф', 'Кодирование'] },
]

export function Services() {
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">Услуги</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Полный цикл автосервиса</h2>
          <p className="mt-4 text-neutral-600">8 направлений, 150+ услуг — от планового ТО до сложного ремонта.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((s, i) => (
            <motion.div key={s.title} className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
              <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                <s.icon size={28} className="text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{s.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-neutral-500 border-t border-neutral-100 pt-3">
                <span className="font-mono font-medium text-brand-600">{s.price}</span>
                <span className="flex items-center gap-1"><Clock size={14}/> {s.time}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                    <Check size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={20} />}>Все услуги и цены</Button>
        </div>
      </div>
    </section>
  )
}