'use client'

import { Phone, Envelope, MapPin, Clock, Car, ArrowRight } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-300" role="contentinfo">
      <div className="container py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Car size={28} weight="fill" className="text-brand-500" aria-hidden="true" />
              <span>АвтоПро</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Профессиональный автосервис с 2009 года. Честные цены, оригинальные запчасти, гарантия до 2 лет.
            </p>
            <div className="mt-6 flex gap-3">
                          <a
                            href="#"
                            className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-brand-900 hover:text-brand-400 transition-colors"
                            aria-label="Telegram"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-brand-900 hover:text-brand-400 transition-colors"
                            aria-label="WhatsApp"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                          </a>
                        </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Контакты</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <a href="tel:+790****0000" className="font-medium text-white hover:text-brand-400 transition-colors block">
                    +7 (900) 000-00-00
                  </a>
                  <p className="text-neutral-500">Многоканальный, 8:00–20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <address className="font-medium text-white not-italic">Москва, Ленинградский проспект, 12а</address>
                  <p className="text-neutral-500">300 м от метро «Аэропорт»</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Envelope size={20} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <a href="mailto:info@autopro.ru" className="font-medium text-white hover:text-brand-400 transition-colors block">
                    info@autopro.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Пн–Вс: 8:00–20:00</p>
                  <p className="text-neutral-500">Без выходных и праздников</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Навигация</h3>
            <nav className="space-y-3 text-sm" aria-label="Навигация по сайту">
              {[
                { href: '#services', label: 'Услуги и цены' },
                { href: '#why-us', label: 'Почему мы' },
                { href: '#reviews', label: 'Отзывы' },
                { href: '#contact', label: 'Контакты' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-neutral-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"
                >
                  {l.label}
                  <ArrowRight size={16} className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container py-6 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} АвтоПро. Все права защищены.</p>
          <div className="flex flex-wrap justify-center gap-4 text-neutral-400">
            <a href="#" className="hover:text-neutral-200 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-neutral-200 transition-colors">Публичная оферта</a>
            <a href="#" className="hover:text-neutral-200 transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  )
}