import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Purchase Muted Masculinity | Chi Akomas',
  description:
    'Choose your preferred platform to purchase Muted Masculinity by Chi Akomas.',
}

export default function BuyPage(): React.JSX.Element {
  // Update these URLs with the actual links to the other platforms
  const purchaseOptions = [
    {
      platform: 'eBooks2go',
      url: 'https://www.ebooks2go.com/family-relationships/muted-masculinity',
    },
    { platform: 'Selar', url: 'https://selar.com/75478s19v9' },
    {
      platform: 'Amazon US',
      url: 'https://www.amazon.com/Muted-Masculinity-Why-Dont-Speak/dp/1545766940',
    },
    {
      platform: 'Amazon UK',
      url: 'https://www.amazon.com/dp/B0HG7QLS87?linkCode=ogi&th=1&psc=1&language=en_US',
    },
    {
      platform: 'Amazon Canada',
      url: 'https://www.amazon.ca/Muted-Masculinity-Why-Dont-Speak-ebook/dp/B0HG7QLS87',
    },
    {
      platform: 'Apple Books',
      url: 'https://books.apple.com/us/book/muted-masculinity-why-men-dont-speak-up/id6804200731',
    },
    { platform: 'Barnes & Noble (Coming Soon)', url: '#' },
    {
      platform: 'Google Play Books',
      url: 'https://play.google.com/store/books/details/Chi_Akomas_Muted_Masculinity_Why_Men_Don_t_Speak_U?id=_JkEEgAAQBAJ',
    },
    {
      platform: 'Kobo',
      url: 'https://www.kobo.com/us/en/ebook/muted-masculinity-why-men-don-t-speak-up',
    },
    {
      platform: 'Booktopia',
      url: 'https://www.booktopia.com.au/muted-masculinity-why-men-don-t-speak-up--chi-akomas/ebook/9781545766958',
    },
  ]

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 py-32 text-zinc-950">
      <Container>
        <div className="mx-auto w-full max-w-lg text-center">
          <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
            Get your copy
          </p>

          <h1 className="font-heading text-5xl leading-none tracking-[0.04em] sm:text-6xl">
            CHOOSE PLATFORM
          </h1>

          <p className="mt-6 font-body text-lg leading-8 text-zinc-700">
            Select your preferred store below to purchase{' '}
            <em>Muted Masculinity</em>.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            {purchaseOptions.map((option) => (
              <a
                key={option.platform}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 items-center justify-center border border-zinc-950 bg-zinc-950 px-6 font-body text-lg text-white transition-colors hover:border-[#A95633] hover:bg-[#A95633]"
              >
                Buy on {option.platform}
              </a>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/book"
              className="inline-flex font-body text-base text-zinc-500 transition-colors hover:text-zinc-950"
            >
              ← Back to book details
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
