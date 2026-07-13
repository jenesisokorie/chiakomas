import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const purchaseUrl = 'https://chiakomas.com'

export const metadata: Metadata = {
  title: 'Where to find me',
  description:
    'Official links for Chi Akomas: website, Instagram, Threads, contact, and where to buy Muted Masculity.',
  openGraph: {
    title: 'Where to find me — Chi Akomas',
    description:
      'Official links for Chi Akomas: website, Instagram, Threads, contact, and where to buy Muted Masculity.',
    images: [
      {
        url: '/images/chi-akomas.jpeg',
        width: 1200,
        height: 630,
        alt: 'Chi Akomas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where to find me — Chi Akomas',
    description:
      'Official links for Chi Akomas: website, Instagram, Threads, contact, and where to buy Muted Masculity.',
    images: ['/images/chi-akomas.jpeg'],
  },
}

export default function OndeMeEncontrarPage(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <Image
          src="/images/chi-akomas.jpeg"
          alt="Chi Akomas"
          width={220}
          height={220}
          priority
          className="mx-auto rounded-full border border-zinc-300 object-cover"
        />

        <h1 className="mt-8 font-heading text-6xl tracking-[0.12em] text-zinc-950">
          Chi Akomas
        </h1>

        <p className="mt-6 font-body text-xl leading-9 text-zinc-700">
          Writer from USA.
          <br />
          Author of <em>Muted Masculity</em>.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 bg-zinc-950 px-6 font-body text-lg text-white transition-colors hover:border-[#A95633] hover:bg-[#A95633]"
          >
            Buy Muted Masculity
          </a>

          <a
            href="https://www.chiakomas.com."
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Official website
          </a>

          <Link
            href="/book"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Where to find the book
          </Link>

          <a
            href="https://instagram.com/chiakomas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Instagram
          </a>

          <a
            href="https://www.threads.com/@chiakomas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Threads
          </a>

          <Link
            href="/#contact"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  )
}
