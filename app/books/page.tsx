import type { Metadata } from 'next'
import Image from 'next/image'
import { books } from '@/lib/books'

export const metadata: Metadata = {
  title: 'Books',
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

const retailerLabels: Record<string, string> = {
  amazon: 'Amazon',
  barnesAndNoble: 'Barnes & Noble',
  appleBooks: 'Apple Books',
  googlePlay: 'Google Play',
  kobo: 'Kobo',
}

export default function BooksPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
          EkklesiaAgora Publishing
        </p>
        <h1 className="font-cinzel text-gold text-4xl md:text-5xl mb-2">Our Books</h1>
        <Divider />
        <p className="font-garamond italic text-parchment/60 text-lg max-w-xl mx-auto">
          Literary fiction rooted in history, faith, and the questions that will not leave you alone.
        </p>
      </section>

      {/* Books list */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-0">
          {books.map((book, index) => (
            <div key={book.id} id={book.id}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-10 items-start py-16`}
              >
                {/* Cover */}
                <div className="w-full md:w-72 flex-shrink-0">
                  <div className="relative aspect-square border border-gold/20 overflow-hidden">
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} by ${book.author}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Title / author caption */}
                  <div className="bg-navy-mid border border-t-0 border-gold/20 px-4 py-3">
                    <p className="font-cinzel text-gold text-sm leading-snug">{book.title}</p>
                    <p className="font-garamond italic text-parchment/50 text-sm">
                      by {book.author}
                    </p>
                  </div>
                  {/* Formats */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {book.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="font-cinzel text-xs tracking-wider text-gold/60 border border-gold/20 px-2 py-0.5"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-1">
                    {book.genre}
                  </p>
                  <h2 className="font-cinzel text-gold text-2xl md:text-3xl leading-snug mb-1">
                    {book.title}
                  </h2>
                  <p className="font-garamond italic text-parchment/50 text-base mb-8">
                    by {book.author}
                  </p>

                  <div className="space-y-4 mb-10">
                    {book.fullDescription.split('\n\n').map((para, i) => (
                      <p
                        key={i}
                        className="font-garamond text-parchment/85 text-base leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Retailer buttons */}
                  <div>
                    <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-parchment/40 mb-3">
                      Available at
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {(
                        Object.entries(book.retailers) as [string, string | undefined][]
                      ).map(
                        ([key, href]) =>
                          href && (
                            <a
                              key={key}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-cinzel text-xs tracking-wider uppercase bg-gold text-navy px-5 py-2 hover:bg-gold-light transition-colors"
                            >
                              {retailerLabels[key] ?? key}
                            </a>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section divider */}
              {index < books.length - 1 && (
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gold/15" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                  <div className="flex-1 h-px bg-gold/15" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
