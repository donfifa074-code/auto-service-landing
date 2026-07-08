'use client'

import { motion } from 'motion/react'
import { Phone, Envelope, MapPin, Clock, Car } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Car size={28} weight="fill" className="text-brand-500" />
              <span>АвтоПро</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">Профессиональный автосервис с 2009 года. Честные цены, оригинальные запчасти, гарантия до 2 лет.</p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Контакты</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-brand-400 mt-0.5" />
                <div><p className="font-medium text-white">+7 (900) 000-00-00</p><p className="text-neutral-500">Многоканальный</p></div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-400 mt-0.5" />
                <div><p className="font-medium text-white">Москва, Ленинградский проспект, 12а</p><p className="text-neutral-500">300 м от метро</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Envelope size={20} className="text-brand-400 mt-0.5" />
                <div><p className="font-medium text-white">info@autopro.ru</p></div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Ссылки</h3>
            <nav className="space-y-2 text-sm">
              {['Услуги', 'О компании', 'Отзывы', 'Контакты'].map(l => <a key={l} href="#" className="block text-neutral-400 hover:text-brand-400">{l}</a>)}
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="container py-6 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 АвтоПро. Все права защищены.</p>
          <div className="flex gap-4"><a href="#" className="hover:text-neutral-300">Политика</a><a href="#" className="hover:text-neutral-300">Соглашение</a></div>
        </div>
      </div>
    </footer>
  )
}