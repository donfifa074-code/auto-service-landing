'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Certificate, Users, Truck, Clock, CreditCard, ChatCircle, MapPin } from '@phosphor-icons/react'

const advantages = [
  { icon: ShieldCheck, title: 'Честные цены', desc: 'Диагностируем — называем сумму — согласуем — начинаем. Никаких сюрпризов.' },
  { icon: Certificate, title: 'Гарантия до 2 лет', desc: 'На работы и запчасти. Гарантийный талон сразу после оплаты.' },
  { icon: Users, title: 'Мастера 10+ лет', desc: '50+ специалистов. Регулярная аттестация и обучение.' },
  { icon: Truck, title: 'Оригинальные запчасти', desc: 'Прямые поставки. Каждая деталь — с чеком и кодом.' },
  { icon: Clock, title: 'Сроки по договору', desc: 'Опоздали — скидка 10% за каждый день задержки.' },
  { icon: CreditCard, title: 'Рассрочка 0%', desc: 'До 12 месяцев. Оформление на месте за 5 минут.' },
  { icon: ChatCircle, title: 'Персональный менеджер', desc: 'Фото/видео из процесса. WhatsApp/Telegram.' },
  { icon: MapPin, title: 'Удобное расположение', desc: 'У метро, парковка, зона ожидания с Wi-Fi.' },
]

export function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">Почему мы</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">8 причин доверить нам авто</h2>
          <p className="mt-4 text-neutral-600">70% клиентов приходят по рекомендации.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {advantages.map((a, i) => (
            <motion.div key={a.title} className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                <a.icon size={26} className="text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}