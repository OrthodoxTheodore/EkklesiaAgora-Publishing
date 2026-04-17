import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
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

const BUSINESS_EMAIL = 'ekklesiaagora@gmail.com'

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
          Get in Touch
        </p>
        <h1 className="font-cinzel text-gold text-4xl md:text-5xl mb-2">Contact</h1>
        <Divider />
        <p className="font-garamond italic text-parchment/60 text-lg max-w-xl mx-auto">
          Whether you are a reader, a prospective author, or simply curious — we welcome your
          message.
        </p>
      </section>

      {/* Two contact cards */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Publishing inquiries */}
          <div className="border border-gold/20 bg-navy-mid p-8 flex flex-col gap-6">
            <div>
              <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold/60 mb-1">
                Publishing Inquiries
              </p>
              <h2 className="font-cinzel text-gold text-xl">Publish With Us</h2>
            </div>
            <div className="h-px bg-gold/15" />
            <p className="font-garamond text-parchment/80 text-base leading-relaxed">
              EkklesiaAgora Publishing is open to working with other authors. If you have a
              manuscript you would like to publish through us, we would be glad to hear from you.
              Please introduce yourself, describe your project, and tell us what kind of support you
              are looking for.
            </p>
            <div>
              <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-parchment/40 mb-2">
                Email us at
              </p>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="font-garamond text-gold text-lg hover:text-gold-light transition-colors break-all"
              >
                {BUSINESS_EMAIL}
              </a>
            </div>
          </div>

          {/* Contact the author */}
          <div className="border border-gold/20 bg-navy-mid p-8 flex flex-col gap-6">
            <div>
              <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold/60 mb-1">
                Readers &amp; Listeners
              </p>
              <h2 className="font-cinzel text-gold text-xl">Contact the Author</h2>
            </div>
            <div className="h-px bg-gold/15" />
            <p className="font-garamond text-parchment/80 text-base leading-relaxed">
              Theodore Edwards welcomes correspondence from readers. Whether you have thoughts on his
              books, questions about the history behind them, or simply want to reach out — your
              message is welcome. He does his best to respond to every letter.
            </p>
            <div>
              <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-parchment/40 mb-2">
                Email Theodore at
              </p>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="font-garamond text-gold text-lg hover:text-gold-light transition-colors break-all"
              >
                {BUSINESS_EMAIL}
              </a>
            </div>
          </div>

        </div>

        {/* Sister site link */}
        <div className="max-w-4xl mx-auto mt-12 border border-gold/15 bg-navy-mid p-6 text-center">
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
            Our Community
          </p>
          <p className="font-garamond text-parchment/70 text-base leading-relaxed mb-4">
            EkklesiaAgora Publishing is a sister to the Ekklesia Agora community — a gathering place
            for faith, ideas, and conversation.
          </p>
          <a
            href="https://ekklesia-agora.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase border border-gold/50 text-gold px-8 py-3 hover:border-gold hover:bg-gold/10 transition-colors"
          >
            Visit Ekklesia Agora
          </a>
        </div>
      </section>
    </>
  )
}
