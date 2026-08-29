import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { getTrackBySlug, musicTracks } from '@/data/music'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface MusicPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams(): { slug: string }[] {
  return musicTracks.map((track) => ({
    slug: track.slug,
  }))
}

export async function generateMetadata({
  params,
}: MusicPageProps): Promise<Metadata> {
  const { slug } = await params
  const track = getTrackBySlug(slug)

  if (!track) return { title: 'Track not found' }

  return {
    title: `${track.title} | Music by Chi Akomas`,
    description: track.excerpt,
    openGraph: {
      title: `${track.title} — Chi Akomas`,
      description: track.excerpt,
      images: [{ url: track.image, width: 800, height: 800, alt: track.title }],
      type: 'music.song',
    },
  }
}

export default async function MusicPage({
  params,
}: MusicPageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const track = getTrackBySlug(slug)

  if (!track) notFound()

  // Google SEO Structured Data for Music Indexing
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicRecording',
    name: track.title,
    byArtist: {
      '@type': 'MusicGroup',
      name: 'Chi Akomas',
    },
    image: track.image,
    datePublished: track.releaseYear,
    url: `https://www.chiakomas.com/music/${track.slug}`,
  }

  return (
    <main className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      {/* Injecting the SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Link
            href="/#music"
            className="inline-flex font-body text-base text-[#A95633] transition-colors hover:text-zinc-950"
          >
            ← Back to music
          </Link>

          <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden bg-zinc-200 shadow-2xl">
              <Image
                src={track.image}
                alt={`Cover for ${track.title}`}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="flex flex-col text-center lg:text-left">
              <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                Single • {track.releaseYear}
              </p>

              <h1 className="font-heading text-5xl leading-none tracking-[0.04em] text-zinc-950 sm:text-6xl">
                {track.title}
              </h1>

              <p className="mt-6 font-body text-xl leading-9 text-zinc-700">
                {track.excerpt}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                {track.platforms.spotify && (
                  <Button href={track.platforms.spotify} tone="light">
                    Listen on Spotify
                  </Button>
                )}
                {track.platforms.appleMusic && (
                  <Button
                    href={track.platforms.appleMusic}
                    variant="outline"
                    tone="light"
                  >
                    Apple Music
                  </Button>
                )}
                {track.platforms.youtube && (
                  <Button
                    href={track.platforms.youtube}
                    variant="outline"
                    tone="light"
                  >
                    YouTube
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Newly Added Footer Section */}
          <footer className="mx-auto mt-20 max-w-4xl border-t border-zinc-300 pt-10 text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              Enjoying the music?
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-8 text-zinc-700">
              Listen to more tracks by Chi Akomas or explore her latest book.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/book" tone="light">
                Discover Muted Masculinity
              </Button>

              <Button href="/#music" variant="outline" tone="light">
                Back to Music
              </Button>
            </div>
          </footer>
        </Container>
      </article>
    </main>
  )
}
