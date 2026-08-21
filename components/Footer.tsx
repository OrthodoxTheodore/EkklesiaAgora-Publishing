import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Readings', href: '/the-bible-proves-orthodox-christianity' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-gold/20 py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <Image
          src="/logo.png"
          alt="EkklesiaAgora Publishing"
          width={110}
          height={110}
          className="object-contain opacity-90"
        />
        <p className="font-cinzel-dec text-gold text-base tracking-wide">EkklesiaAgora Publishing</p>
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-cinzel text-xs tracking-widest text-parchment/50 hover:text-gold transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="font-garamond text-muted text-sm">
          © {new Date().getFullYear()} EkklesiaAgora Publishing. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
