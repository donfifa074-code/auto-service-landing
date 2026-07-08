'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Certificate, Users, Truck, Clock, CreditCard, ChatCircle, MapPin } from '@phosphor-icons/react'

const advantages = [
  { icon: ShieldCheck, title: 'Честные цены', desc: 'Диагностируем — называем сумму — согласуем — начинаем. Никаких сюрпризов и скрытых доплат.' },
  { icon: Certificate, title: 'Гарантия до 2 лет', desc: 'На работы и запчасти. Гарантийный талон выдаём сразу после оплаты — без мелкого шрифта.' },
  { icon: Users, title: 'Мастера 10+ лет', desc: '50+ специалистов. Регулярная аттестация и обучение на новом оборудовании.' },
  { icon: Truck, title: 'Оригинальные запчасти', desc: 'Прямые поставки от дистрибьюторов. Каждая деталь — с чеком, кодом и прослеживаемостью.' },
  { icon: Clock, title: 'Сроки по договору', desc: 'Опоздали — скидка 10% за каждый день задержки. Время клиента — закон.' },
  { icon: CreditCard, title: 'Рассрочка 0%', desc: 'До 12 месяцев. Оформление на месте за 5 минут, без первоначального взноса.' },
  { icon: ChatCircle, title: 'Персональный менеджер', desc: 'Фото/видео из процесса. Связь в WhatsApp/Telegram — отвечаем за 2 минуты.' },
  { icon: MapPin, title: 'Удобное расположение', desc: 'У метро, парковка, зона ожидания с Wi-Fi, кофе и детьми не скучно.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
}

export function WhyUs() {
  return (
    <section id="why-us" className="section bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mb-16"
        >
          <span className="eyebrow">Почему мы</span>
          <h2
            id="why-us-heading"
            className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-neutral-950 text-balance"
          >
            8 причин доверить нам авто
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            70% клиентов приходят по рекомендации. Это наш главный KPI.
          </p>
        </motion.div>

        <div className="space-y-10">
          {advantages.map((a, i) => {
            const isEven = i % 2 === 0
            return (
              <motion.article
                key={a.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:[grid-template-areas:_"image_content"]'}`}
                style={{ gridTemplateAreas: isEven ? '"content image"' : '"image content"' }}
              >
                <div
                  className={`${isEven ? 'lg:col-span-6 lg:col-start-1' : 'lg:col-span-6 lg:col-start-7'} lg:px-8`}
                  style={{ gridArea: 'content' }}
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center mb-5" aria-hidden="true">
                    <a.icon size={28} className="text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{a.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-base">{a.desc}</p>
                </div>

                <div
                  className={`${isEven ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-6 lg:col-start-1'} lg:px-8`}
                  style={{ gridArea: 'image' }}
                  aria-hidden="true"
                >
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50 via-brand-100 to-brand-50" />
                    <div className="relative inset-0 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-200 flex items-center justify-center">
                      <a.icon size={48} className="text-brand-500/60" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-brand-500/10 blur-xl" />
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-brand-500/10 blur-xl" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}