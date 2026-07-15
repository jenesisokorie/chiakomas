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
  metadataBase: new URL('https://www.chiakomas.com.'),
  title: {
    default: 'Chi Akomas — Writer',
    template: '%s | Chi Akomas',
  },
  description:
    'American based Nigerian author, speaker, gospel recording artist communication educator, and digital content strategist dedicated to empowering people to live with purpose, confidence, and authentic leadership.',
  openGraph: {
    title: 'Chi Akomas — Writer',
    description:
      'Discover Muted Masculity - Why men don’t speak up, an important addition to the increasing discussion about men’s mental and emotional well-being, a healthy definition of masculinity.',
    siteName: 'Chi Akomas',
    images: [
      {
        url: '/images/chi-akomas-cover.jpg',
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
      'Discover Muted Masculity - Why men don’t speak up, an important addition to the increasing discussion about men’s mental and emotional well-being, a healthy definition of masculinity.',
    images: ['/images/chi-akomas-cover.jpg'],
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
