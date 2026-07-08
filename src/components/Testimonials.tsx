'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { Quotes, CaretLeft, CaretRight, Star } from '@phosphor-icons/react'
import { useState, useCallback, useEffect } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Алексей К.',
    initials: 'АК',
    service: 'Капитальный ремонт двигателя',
    text: 'Три сервиса до этого не могли диагностировать. В АвтоПро за 2 часа нашли проблему — просто не зачистили контакты. Заменили за 1200 рублей вместо 15 тысяч. Рекомендую!',
    car: 'BMW X5',
    year: '2024',
  },
  {
    id: 2,
    name: 'Марина В.',
    initials: 'МВ',
    service: 'Полное ТО + замена ГРМ',
    text: 'Перешла с официалов после счета на 85 тысяч. Здесь тот же перечень работ — 42 тысячи. Мастер показал всё, объяснил, ничего не навязывал. Теперь только сюда.',
    car: 'Toyota Camry',
    year: '2023',
  },
  {
    id: 3,
    name: 'Дмитрий С.',
    initials: 'ДС',
    service: 'Ремонт подвески',
    text: 'Гулял задняя подвеска, думал амортизаторы. Проверили на стенде Hunter — оказалось, просто втулки стабилизатора. Починили за час за 3 тысячи. Честно и быстро.',
    car: 'Volkswagen Tiguan',
    year: '2024',
  },
  {
    id: 4,
    name: 'Елена Р.',
    initials: 'ЕР',
    service: 'Автоэлектрика + чип-тюнинг',
    text: 'Сделали Stage 1 на 2.0 TSI. Мощность выросла на 40 л.с., крутящий момент +60 Нм. Экономия в городе ~1 л/100км. Водить стало одно удовольствие.',
    car: 'Skoda Octavia RS',
    year: '2023',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const scroll = useScroll({ target: undefined, offset: ['start start', 'end start'] })
  const progress = useTransform(scroll.scrollY, [0, 1], [0, 1])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((prev) => (index + reviews.length) % reviews.length)
  }, [])

  const nextSlide = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide])
  const prevSlide = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = e.changedTouches[0].clientX - touchStart
    if (Math.abs(diff) > 50) {
      diff > 0 ? prevSlide() : nextSlide()
    }
    setTouchStart(null)
  }

  return (
    <section id="reviews" className="section bg-white" aria-labelledby="reviews-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mb-12"
        >
          <span className="eyebrow">Отзывы</span>
          <h2
            id="reviews-heading"
            className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-neutral-950 text-balance"
          >
            Что говорят клиенты
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Настоящие люди, реальные случаи, реальные машины.
          </p>
        </motion.div>

        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-6 overflow-x-auto scroll-snap-x p-1 -ml-1 -mr-1 pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            role="region"
            aria-label="Отзывы клиентов"
            aria-roledescription="carousel"
          >
            {reviews.map((r, i) => (
              <motion.article
                key={r.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="flex-shrink-0 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] scroll-snap-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="card relative h-full flex flex-col p-7 transition-all duration-300 ease-out hover:shadow-xl hover:border-brand-200">
                  <Quotes size={36} className="absolute top-6 right-6 text-brand-100" aria-hidden="true" />

                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-semibold text-sm flex-shrink-0">
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-neutral-900 truncate">{r.name}</p>
                      <p className="text-sm text-neutral-500 truncate">{r.car}, {r.year}</p>
                    </div>
                  </div>

                  <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-4 w-fit relative z-10">
                    {r.service}
                  </span>

                  <div className="flex items-center gap-1 mb-4 relative z-10" aria-label="Рейтинг 5 из 5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} weight="fill" className="text-amber-400" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="flex-1 text-neutral-700 leading-relaxed text-base relative z-10">
                    <p className="text-pretty">«{r.text}»</p>
                  </blockquote>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />

          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 pointer-events-none">
            <motion.button
              onClick={prevSlide}
              className="pointer-events-auto ml-2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Предыдущий отзыв"
            >
              <CaretLeft size={24} className="text-neutral-700" aria-hidden="true" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="pointer-events-auto mr-2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200 flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ml-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Следующий отзыв"
            >
              <CaretRight size={24} className="text-neutral-700" aria-hidden="true" />
            </motion.button>
          </div>

          <div className="lg:hidden flex justify-center gap-2 mt-6" role="tablist" aria-label="Навигация отзывов">
            {reviews.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-out ${
                  i === currentIndex ? 'bg-brand-500 w-6' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                whileHover={i !== currentIndex ? { scale: 1.3 } : undefined}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}