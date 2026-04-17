import Image from 'next/image'
import Link from 'next/link'
import { books } from '@/lib/books'

function Divider() {
  return (
    <div className="flex items-center gap-4 w-64 mx-auto my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
      <div className="w-2 h-2 rounded-full bg-gold/70" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="EkklesiaAgora Publishing"
            width={200}
            height={200}
            className="object-contain mx-auto"
            priority
          />
        </div>
        <Divider />
        <h1 className="font-cinzel-dec text-gold text-4xl md:text-6xl leading-tight mb-4">
          EkklesiaAgora
          <br />
          Publishing
        </h1>
        <p className="font-garamond italic text-parchment/70 text-xl md:text-2xl mb-10 max-w-lg">
          Where stories find their voice and readers find their way home.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/books"
            className="font-cinzel text-xs tracking-[0.2em] uppercase bg-gold text-navy px-8 py-3 hover:bg-gold-light transition-colors"
          >
            Browse Our Books
          </Link>
          <Link
            href="/contact"
            className="font-cinzel text-xs tracking-[0.2em] uppercase border border-gold/50 text-gold px-8 py-3 hover:border-gold hover:bg-gold/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Coming Soon — The Hearth Between Us */}
      <section className="py-24 px-6 bg-navy-mid border-y border-gold/15">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 flex-shrink-0">
            <div className="relative aspect-square border border-gold/30 overflow-hidden shadow-[0_0_40px_rgba(180,145,60,0.15)]">
              <Image
                src="/covers/hearth-between-us.png"
                alt="The Hearth Between Us by Theodore Edwards"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="font-cinzel text-xs tracking-[0.35em] uppercase text-gold/60 mb-3">
              Coming Soon · June 1, 2026
            </p>
            <h2 className="font-cinzel text-gold text-3xl md:text-4xl leading-snug mb-1">
              The Hearth Between Us
            </h2>
            <p className="font-garamond italic text-parchment/50 text-base mb-6">
              by Theodore Edwards · A companion to <em>The Fence Between Us</em>
            </p>
            <Divider />
            <p className="font-garamond text-parchment/80 text-lg leading-relaxed mb-8">
              When the war ends and the men come home, the harder work begins — learning to live
              again beside the people who waited. The hearth is still burning. Whether they can
              find their way back to it is another question entirely.
            </p>
            <Link
              href="/books#hearth-between-us"
              className="font-cinzel text-xs tracking-[0.2em] uppercase bg-gold text-navy px-8 py-3 hover:bg-gold-light transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
              From the Press
            </p>
            <h2 className="font-cinzel text-gold text-3xl">Our Books</h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="border border-gold/15 hover:border-gold/40 transition-colors bg-navy-mid flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-cinzel text-xs tracking-widest text-gold/60 uppercase mb-1">
                    {book.genre}
                  </p>
                  <h3 className="font-cinzel text-gold text-lg leading-snug mb-1">{book.title}</h3>
                  <p className="font-garamond italic text-parchment/50 text-sm mb-4">
                    by {book.author}
                  </p>
                  {book.comingSoon && (
                    <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold/70 border border-gold/30 px-3 py-1 mb-4 self-start">
                      Coming Soon · {book.releaseDate}
                    </p>
                  )}
                  <p className="font-garamond text-parchment/75 text-sm leading-relaxed flex-1 mb-6 line-clamp-3">
                    {book.shortDescription}
                  </p>
                  <Link
                    href={`/books#${book.id}`}
                    className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-2 text-center hover:bg-gold/10 hover:border-gold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the press */}
      <section className="bg-navy-mid py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
            About the Press
          </p>
          <h2 className="font-cinzel text-gold text-3xl mb-2">EkklesiaAgora Publishing</h2>
          <Divider />
          <p className="font-garamond text-parchment/80 text-lg leading-relaxed mb-4">
            EkklesiaAgora Publishing is an independent press dedicated to bringing thoughtful literary
            fiction to readers. Rooted in faith, history, and the enduring questions of human
            experience, our books are written for those who believe stories still matter.
          </p>
          <p className="font-garamond text-parchment/60 text-base leading-relaxed mb-10">
            We are also open to working with other authors. If you have a manuscript and are
            interested in publishing through EkklesiaAgora, we would love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="font-cinzel text-xs tracking-[0.2em] uppercase bg-gold text-navy px-8 py-3 hover:bg-gold-light transition-colors"
            >
              About the Press
            </Link>
            <Link
              href="/contact"
              className="font-cinzel text-xs tracking-[0.2em] uppercase border border-gold/50 text-gold px-8 py-3 hover:border-gold hover:bg-gold/10 transition-colors"
            >
              Publish With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
