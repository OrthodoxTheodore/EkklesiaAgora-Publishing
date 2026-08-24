import type { Metadata } from 'next'
import {
  historyTitle,
  historySubtitle,
  historyIntroNote,
  historyClosingNote,
  historyChapters,
  tagLabels,
  TagKind,
} from '@/lib/mcgarraughHistory'

export const metadata: Metadata = {
  title: historyTitle,
  description:
    'A sourced family history of the McGarraugh line — from Gaelic Ayrshire through the Covenanter flight to Ulster, the Pennsylvania frontier, and eleven generations to the present.',
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
  const parts = text.split(/(\*\*.+?\*\*|\*.+?\*)/g)
  return parts.map((part, i) => {
    if (/^\*\*.+\*\*$/.test(part)) {
      return (
        <strong key={i} className="text-gold-light font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (/^\*.+\*$/.test(part)) {
      return (
        <em key={i} className="italic text-parchment font-medium">
          {part.slice(1, -1)}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

const tagBorder: Record<TagKind, string> = {
  record: 'border-gold',
  inference: 'border-muted',
  tradition: 'border-parchment/25',
}
const tagLabelColor: Record<TagKind, string> = {
  record: 'text-gold',
  inference: 'text-muted',
  tradition: 'text-parchment/50',
}

export default function McGarraughFamilyHistoryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-14 px-6 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
          A Family Record, 1607 – Present
        </p>
        <h1 className="font-cinzel text-gold text-4xl md:text-5xl mb-2 leading-tight">
          {historyTitle}
        </h1>
        <Divider />
        <p className="font-garamond italic text-parchment/60 text-lg max-w-xl mx-auto">
          {historySubtitle}
        </p>
      </section>

      {/* How to read this book */}
      <section className="px-6 pb-10">
        <div className="max-w-2xl mx-auto border-t border-b border-gold/15 py-6">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-4 text-center">
            How to Read This Book
          </p>
          <p className="font-garamond italic text-parchment/70 text-base leading-relaxed text-center mb-6">
            {historyIntroNote}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(Object.keys(tagLabels) as TagKind[]).map((kind) => (
              <div key={kind} className={`border-l-2 ${tagBorder[kind]} pl-4 py-1`}>
                <p className={`font-cinzel text-[11px] tracking-[0.1em] uppercase ${tagLabelColor[kind]} mb-1`}>
                  {tagLabels[kind]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto border border-gold/20 bg-navy-mid p-8">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-5 text-center">
            The {historyChapters.length} Chapters
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {historyChapters.map((c, i) => (
              <li key={c.numeral} className="flex gap-3 text-sm">
                <span className="font-cinzel text-gold/70 w-8 flex-shrink-0">{c.numeral}</span>
                <a
                  href={`#c${i + 1}`}
                  className="font-garamond text-parchment/80 hover:text-gold transition-colors leading-snug"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Chapters */}
      <section className="px-6 pb-10">
        <div className="max-w-3xl mx-auto">
          {historyChapters.map((chapter, i) => (
            <div key={chapter.numeral}>
              <div id={`c${i + 1}`} className="scroll-mt-28">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="font-cinzel-dec text-gold text-4xl md:text-5xl leading-none">
                    {chapter.numeral}
                  </span>
                  <h2 className="font-cinzel text-gold text-xl md:text-2xl uppercase tracking-wide leading-snug">
                    {chapter.title}
                  </h2>
                </div>
                <p className="font-cinzel text-[11px] tracking-[0.2em] uppercase text-muted mb-8">
                  {chapter.kicker}
                </p>

                <div className="space-y-5">
                  {chapter.blocks.map((block, bi) => {
                    if (block.type === 'p') {
                      return (
                        <p key={bi} className="font-garamond text-parchment/85 text-lg leading-relaxed">
                          {renderInline(block.text ?? '')}
                        </p>
                      )
                    }
                    if (block.type === 'quote') {
                      return (
                        <blockquote key={bi} className="border-l-4 border-gold/60 bg-navy-mid px-6 py-5">
                          <p className="font-garamond text-parchment text-lg leading-relaxed">
                            &ldquo;{renderInline(block.text ?? '')}&rdquo;
                          </p>
                          {block.citation && (
                            <cite className="block not-italic font-cinzel text-gold/70 text-xs tracking-[0.15em] uppercase mt-3 text-right">
                              {block.citation}
                            </cite>
                          )}
                        </blockquote>
                      )
                    }
                    if (block.type === 'tag' && block.tagKind) {
                      return (
                        <div
                          key={bi}
                          className={`border-l-2 ${tagBorder[block.tagKind]} bg-navy-mid/60 pl-5 pr-5 py-4`}
                        >
                          <p className={`font-cinzel text-[11px] tracking-[0.12em] uppercase ${tagLabelColor[block.tagKind]} mb-1.5`}>
                            {tagLabels[block.tagKind]}
                          </p>
                          <p className="font-garamond text-parchment/65 text-sm leading-relaxed">
                            {renderInline(block.tagNote ?? '')}
                          </p>
                        </div>
                      )
                    }
                    if (block.type === 'table' && block.table) {
                      return (
                        <div key={bi} className="overflow-x-auto border border-gold/15">
                          <table className="w-full text-sm min-w-[560px]">
                            <thead>
                              <tr className="border-b border-gold/20">
                                {block.table.headers.map((h) => (
                                  <th
                                    key={h}
                                    className="font-cinzel text-[10px] tracking-[0.08em] uppercase text-gold/60 text-left px-4 py-3"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.table.rows.map((row, ri) => (
                                <tr key={ri} className="border-b border-gold/10 last:border-0">
                                  {row.map((cell, ci) => (
                                    <td
                                      key={ci}
                                      className="font-garamond text-parchment/75 px-4 py-3 align-top leading-snug"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )
                    }
                    if (block.type === 'gen' && block.gen) {
                      const g = block.gen
                      return (
                        <div
                          key={bi}
                          className={`grid grid-cols-[44px_1fr] gap-4 py-6 border-b border-gold/10 ${
                            g.isYou ? 'bg-navy-mid/60 -mx-6 px-6 border-t border-gold/20' : ''
                          }`}
                        >
                          <div className="font-cinzel text-muted text-xs pt-1">
                            <span className="block text-gold text-2xl font-semibold leading-none mb-1">
                              {g.number}
                            </span>
                            {g.yearLabel}
                          </div>
                          <div>
                            <h4 className="font-cinzel text-parchment text-base md:text-lg leading-snug">
                              {g.name} <span className="text-muted font-normal">{g.dates}</span>
                              {g.spouse && (
                                <>
                                  <span className="font-garamond italic text-parchment/50 mx-2">m.</span>
                                  {g.spouse} <span className="text-muted font-normal">{g.spouseDates}</span>
                                </>
                              )}
                            </h4>
                            {g.note && (
                              <p className="font-garamond text-parchment/70 text-sm mt-2 leading-relaxed">
                                {g.note}
                              </p>
                            )}
                            {g.parents && (
                              <p className="font-garamond italic text-parchment/50 text-sm mt-1">{g.parents}</p>
                            )}
                            {g.verifiedChip && (
                              <span className="inline-block mt-2 font-cinzel text-[10px] tracking-[0.08em] uppercase text-gold border border-gold/50 px-2 py-0.5">
                                {g.verifiedChip}
                              </span>
                            )}
                            {!g.isYou && (
                              <p className="font-garamond text-parchment/30 text-sm mt-3 border-b border-dotted border-parchment/20 pb-1 max-w-sm">
                                Add what you know
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              </div>

              {i < historyChapters.length - 1 && <SectionDivider />}
            </div>
          ))}
        </div>
      </section>

      {/* Closing colophon */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <Divider />
          <p className="font-garamond italic text-parchment/50 text-sm leading-relaxed mt-6">
            {historyClosingNote}
          </p>
        </div>
      </section>
    </>
  )
}
