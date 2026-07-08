import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'АвтоПро — Профессиональный автосервис',
  description: 'Честный ремонт, прозрачные цены, гарантия до 2 лет. Полный цикл услуг.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  )
}
