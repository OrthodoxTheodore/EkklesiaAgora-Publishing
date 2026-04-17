import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { books } from '@/lib/books'
import { authors } from '@/lib/authors'

export const metadata: Metadata = {
  title: 'About',
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
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-gold/15" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
      <div className="flex-1 h-px bg-gold/15" />
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
          Who We Are
        </p>
        <h1 className="font-cinzel text-gold text-4xl md:text-5xl mb-2">About EkklesiaAgora</h1>
        <Divider />
      </section>

      {/* About the Press */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-garamond text-parchment/85 text-lg leading-relaxed mb-5">
            EkklesiaAgora Publishing is an independent literary press dedicated to bringing
            thoughtful, carefully crafted fiction to readers. Founded by Theodore Edwards, the press
            takes its name from two Greek words:{' '}
            <em className="text-parchment">ekklesia</em> — a gathering, a called-out community — and{' '}
            <em className="text-parchment">agora</em> — the open marketplace of ideas, the public
            square.
          </p>
          <p className="font-garamond text-parchment/85 text-lg leading-relaxed mb-5">
            Together they describe what we believe publishing at its best can be: a place where
            stories are gathered and set into the common life of readers. We publish work rooted in
            history, faith, and the enduring questions of what it means to live, to act, and to carry
            the weight of the past into the present.
          </p>
          <p className="font-garamond text-parchment/85 text-lg leading-relaxed mb-12">
            EkklesiaAgora titles are published through Amazon KDP and IngramSpark, making them
            available to readers through major online and brick-and-mortar retailers worldwide.
          </p>

          {/* Publish with us callout */}
          <div className="border border-gold/20 bg-navy-mid p-8 text-center">
            <p className="font-cinzel text-gold text-xl mb-3">Publish With Us</p>
            <p className="font-garamond text-parchment/70 text-base leading-relaxed mb-6">
              EkklesiaAgora Publishing is open to working with other authors. If you have a
              manuscript and are interested in publishing through us, we encourage you to reach out.
              We would love to hear about your work.
            </p>
            <Link
              href="/contact"
              className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase bg-gold text-navy px-8 py-3 hover:bg-gold-light transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 max-w-3xl mx-auto">
        <SectionDivider />
      </div>

      {/* Authors */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
              The Authors
            </p>
            <h2 className="font-cinzel text-gold text-3xl mb-2">About the Authors</h2>
            <Divider />
          </div>

          {authors.map((author) => {
            const authorBooks = books.filter((b) => author.bookIds.includes(b.id))
            return (
              <div key={author.id} className="mb-16">
                <h3 className="font-cinzel text-gold text-2xl mb-1">{author.name}</h3>
                <p className="font-garamond italic text-parchment/50 text-base mb-8">
                  {author.role}
                </p>

                <div className="space-y-4 mb-10">
                  {author.bio.map((para, i) => (
                    <p key={i} className="font-garamond text-parchment/85 text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Books by this author */}
                <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
                  Books by {author.name}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {authorBooks.map((book) => (
                    <Link
                      key={book.id}
                      href={`/books#${book.id}`}
                      className="group border border-gold/15 hover:border-gold/40 transition-colors overflow-hidden"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={book.coverImage}
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 bg-navy-mid">
                        <p className="font-cinzel text-gold text-xs leading-snug">{book.title}</p>
                        <p className="font-garamond italic text-parchment/40 text-xs mt-0.5">
                          by {book.author}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Future authors */}
          <div className="border border-gold/15 bg-navy-mid p-6 text-center">
            <p className="font-cinzel text-gold/60 text-sm tracking-wider mb-2">
              More Authors Coming
            </p>
            <p className="font-garamond text-parchment/50 text-sm leading-relaxed">
              As EkklesiaAgora Publishing grows, additional authors will be featured here. Interested
              in publishing with us?{' '}
              <Link
                href="/contact"
                className="text-gold/70 hover:text-gold underline underline-offset-2 transition-colors"
              >
                Get in touch.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
