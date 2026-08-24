'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Readings', href: '/readings' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-cinzel-dec text-gold text-base md:text-lg tracking-wide hover:text-gold-light transition-colors"
        >
          EkklesiaAgora Publishing
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`font-cinzel text-xs tracking-[0.2em] uppercase transition-colors ${
                pathname === href ? 'text-gold' : 'text-parchment/70 hover:text-gold'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold text-xl leading-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-mid border-t border-gold/20 px-6 py-5 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`font-cinzel text-sm tracking-widest transition-colors ${
                pathname === href ? 'text-gold' : 'text-parchment/70 hover:text-gold'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
