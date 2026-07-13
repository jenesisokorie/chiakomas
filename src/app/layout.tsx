import type { Metadata } from 'next'
import { Bebas_Neue, Lora } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cabralcorreia.com.br'),
  title: {
    default: 'Chi Akomas — Writer',
    template: '%s | Chi Akomas',
  },
  description:
    'Brazilian short story writer of realistic fiction. Discover Muted Masculity, a collection exploring violence, love, inequality, and the absurdities of daily life.',
  openGraph: {
    title: 'Chi Akomas — Writer',
    description:
      'Discover Muted Masculity, a short story collection of realistic fiction exploring violence, love, inequality, and the absurdities of daily life.',
    siteName: 'Chi Akomas',
    images: [
      {
        url: '/images/cabral-correia-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Chi Akomas, author of Muted Masculity',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chi Akomas — Writer',
    description:
      'Discover Muted Masculity, a short story collection of realistic fiction exploring violence, love, inequality, and the absurdities of daily life.',
    images: ['/images/cabral-correia-cover.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  )
}
