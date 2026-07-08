'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { WhyUs } from '@/components/WhyUs'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { BookingModal } from '@/components/BookingModal'

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  return (
    <>
      <Navigation onBookClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <Services />
        <WhyUs />
        <Testimonials />
        <CTA onBookClick={() => setIsBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
