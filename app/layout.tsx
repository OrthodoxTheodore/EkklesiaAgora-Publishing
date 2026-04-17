import type { Metadata } from 'next'
import { Cinzel_Decorative, Cinzel, EB_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
})

export const metadata: Metadata = {
  title: {
    template: '%s | EkklesiaAgora Publishing',
    default: 'EkklesiaAgora Publishing',
  },
  description:
    'EkklesiaAgora Publishing — independent literary fiction by Theodore Edwards and others.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} ${cinzel.variable} ${ebGaramond.variable} bg-navy text-parchment font-garamond antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
