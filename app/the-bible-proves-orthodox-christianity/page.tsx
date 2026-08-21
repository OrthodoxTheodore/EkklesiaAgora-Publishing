import type { Metadata } from 'next'
import {
  readingTitle,
  readingSubtitle,
  readingIntroNote,
  readingClosingNote,
  readingMovements,
} from '@/lib/orthodoxyReading'

export const metadata: Metadata = {
  title: readingTitle,
  description:
    'An eighteen-part narrative built almost entirely from chained King James quotations, making the biblical case for one visible Church, apostolic succession, and obedience to ordained leaders.',
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

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-14">
      <div className="flex-1 h-px bg-gold/15" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
      <div className="flex-1 h-px bg-gold/15" />
    </div>
  )
}

function renderInline(text: string) {
  const parts = text.split(/\*(.+?)\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="italic text-parchment font-medium">
        {part}
      </em>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export default function TheBibleProvesOrthodoxChristianityPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-14 px-6 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
          A Free Reading
        </p>
        <h1 className="font-cinzel text-gold text-4xl md:text-5xl mb-2 leading-tight">
          {readingTitle}
        </h1>
        <Divider />
        <p className="font-garamond italic text-parchment/60 text-lg max-w-xl mx-auto">
          {readingSubtitle}
        </p>
      </section>

      {/* Intro note */}
      <section className="px-6 pb-10">
        <div className="max-w-2xl mx-auto border-t border-b border-gold/15 py-6">
          <p className="font-garamond italic text-parchment/70 text-base leading-relaxed text-center">
            {readingIntroNote}
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto border border-gold/20 bg-navy-mid p-8">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-5 text-center">
            The {readingMovements.length} Movements
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {readingMovements.map((m, i) => (
              <li key={m.numeral} className="flex gap-3 text-sm">
                <span className="font-cinzel text-gold/70 w-8 flex-shrink-0">{m.numeral}</span>
                <a
                  href={`#m${i + 1}`}
                  className="font-garamond text-parchment/80 hover:text-gold transition-colors leading-snug"
                >
                  {renderInline(m.title)}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Movements */}
      <section className="px-6 pb-10">
        <div className="max-w-3xl mx-auto">
          {readingMovements.map((movement, i) => (
            <div key={movement.numeral}>
              <div id={`m${i + 1}`} className="scroll-mt-28">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-cinzel-dec text-gold text-4xl md:text-5xl leading-none">
                    {movement.numeral}
                  </span>
                  <h2 className="font-cinzel text-gold text-xl md:text-2xl uppercase tracking-wide leading-snug">
                    {renderInline(movement.title)}
                  </h2>
                </div>

                <div className="space-y-5">
                  {movement.blocks.map((block, bi) =>
                    block.type === 'p' ? (
                      <p
                        key={bi}
                        className="font-garamond text-parchment/85 text-lg leading-relaxed"
                      >
                        {renderInline(block.text)}
                      </p>
                    ) : (
                      <blockquote
                        key={bi}
                        className="border-l-4 border-gold/60 bg-navy-mid px-6 py-5"
                      >
                        <p className="font-garamond text-parchment text-lg leading-relaxed">
                          &ldquo;{renderInline(block.text)}&rdquo;
                        </p>
                        {block.citation && (
                          <cite className="block not-italic font-cinzel text-gold/70 text-xs tracking-[0.15em] uppercase mt-3 text-right">
                            {block.citation}
                          </cite>
                        )}
                      </blockquote>
                    )
                  )}
                </div>
              </div>

              {i < readingMovements.length - 1 && <SectionDivider />}
            </div>
          ))}
        </div>
      </section>

      {/* Closing colophon */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <Divider />
          <p className="font-garamond italic text-parchment/50 text-sm leading-relaxed mt-6">
            {readingClosingNote}
          </p>
        </div>
      </section>
    </>
  )
}
