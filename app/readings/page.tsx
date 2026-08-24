import type { Metadata } from 'next'
import Link from 'next/link'
import { readingTitle, readingSubtitle } from '@/lib/orthodoxyReading'
import { historyTitle, historySubtitle } from '@/lib/mcgarraughHistory'

export const metadata: Metadata = {
  title: 'Readings',
  description: 'Free long-form readings from EkklesiaAgora Publishing.',
}

function Divider() {
  return (
    <div className="flex items-center gap-4 w-64 mx-auto my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
      <div className="w-2 h-2 rounded-full bg-gold/70" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  )
}

const readings = [
  {
    href: '/the-bible-proves-orthodox-christianity',
    eyebrow: 'A Free Reading',
    title: readingTitle,
    subtitle: readingSubtitle,
  },
  {
    href: '/mcgarraugh-family-history',
    eyebrow: 'A Family Record',
    title: historyTitle,
    subtitle: historySubtitle,
  },
]

export default function ReadingsPage() {
  return (
    <>
      <section className="pt-32 pb-14 px-6 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
          From the Press
        </p>
        <h1 className="font-cinzel text-gold text-4xl md:text-5xl mb-2 leading-tight">Readings</h1>
        <Divider />
        <p className="font-garamond italic text-parchment/60 text-lg max-w-xl mx-auto">
          Long-form pieces, free to read in full.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {readings.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="block border border-gold/20 bg-navy-mid p-8 hover:border-gold/50 transition-colors"
            >
              <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-3">
                {r.eyebrow}
              </p>
              <h2 className="font-cinzel text-gold text-2xl mb-2 leading-snug">{r.title}</h2>
              <p className="font-garamond italic text-parchment/60 text-base max-w-xl">
                {r.subtitle}
              </p>
              <p className="font-cinzel text-[11px] tracking-[0.2em] uppercase text-gold/70 mt-6">
                Read in Full &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
