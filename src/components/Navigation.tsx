'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { Car, Phone, List, X } from '@phosphor-icons/react'
import { Button } from './ui/Button'

interface NavProps {
  onBookClick: () => void
}

export function Navigation({ onBookClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '#services', label: 'Услуги' },
    { href: '#why-us', label: 'Почему мы' },
    { href: '#reviews', label: 'Отзывы' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-neutral-900">
          <Car size={28} weight="fill" className="text-brand-500" />
          <span>АвтоПро</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+79000000000" className="text-sm font-medium text-neutral-600 hover:text-brand-600">+7 (900) 000-00-00</a>
          <Button size="sm" onClick={onBookClick}>Записаться</Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="container py-4 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block py-2 text-neutral-700" onClick={() => setMobileOpen(false)}>{l.label}</a>
            ))}
            <Button className="w-full mt-2" onClick={() => { onBookClick(); setMobileOpen(false) }}>Записаться</Button>
          </div>
        </div>
      )}
    </motion.header>
  )
}