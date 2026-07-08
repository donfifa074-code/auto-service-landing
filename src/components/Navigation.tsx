'use client'

import { motion } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { Car, Phone, List, X } from '@phosphor-icons/react'
import { Button } from './ui/Button'

interface NavProps {
  onBookClick: () => void
}

const sections = [
  { id: 'hero', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'why-us', label: 'Почему мы' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contact', label: 'Контакты' },
]

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#why-us', label: 'Почему мы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
]

export function Navigation({ onBookClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    )

    const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      role="banner"
    >
      <div className="container flex h-[72px] md:h-[80px] items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-lg"
          aria-label="АвтоПро — главная"
        >
          <Car size={28} weight="fill" className="text-brand-500" aria-hidden="true" />
          <span>АвтоПро</span>
        </a>

        <nav className="hidden md:flex items-center gap-2" aria-label="Основная навигация">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-out ${
                activeSection === l.href.replace('#', '')
                  ? 'text-brand-600 bg-brand-50'
                  : 'text-neutral-600 hover:text-brand-600 hover:bg-neutral-100'
              }`}
              aria-current={activeSection === l.href.replace('#', '') ? 'page' : undefined}
            >
              {l.label}
              {activeSection === l.href.replace('#', '') && (
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+790****0000"
            className="text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors hidden sm:inline-flex items-center gap-1"
          >
            <Phone size={18} aria-hidden="true" />
            +7 (900) 000-00-00
          </a>
          <Button size="md" onClick={onBookClick}>
            Записаться
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 hover:text-brand-600 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <motion.div
        id="mobile-menu"
        className="md:hidden bg-white border-t border-neutral-200 overflow-hidden"
        initial={false}
        animate={{
          height: mobileOpen ? 'auto' : 0,
          opacity: mobileOpen ? 1 : 0,
          paddingTop: mobileOpen ? '1rem' : 0,
          paddingBottom: mobileOpen ? '1.5rem' : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.4,
        }}
        role="navigation"
        aria-label="Мобильное меню"
      >
        <div className="container space-y-3">
          {navLinks.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className={`block py-3 px-2 rounded-lg text-neutral-700 font-medium transition-colors ${
                activeSection === l.href.replace('#', '')
                  ? 'bg-brand-50 text-brand-600'
                  : 'hover:bg-neutral-100'
              }`}
              onClick={() => setMobileOpen(false)}
              aria-current={activeSection === l.href.replace('#', '') ? 'page' : undefined}
              whileHover={{ x: 4, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Button className="w-full" onClick={() => { onBookClick(); setMobileOpen(false) }}>
              Записаться
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  )
}