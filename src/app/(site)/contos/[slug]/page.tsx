import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { getStoryBySlug, stories } from '@/data/stories'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface StoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams(): { slug: string }[] {
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    return {
      title: 'Story not found',
    }
  }

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} — Chi Akomas`,
      description: story.excerpt,
      images: [
        {
          url: story.image,
          width: 540,
          height: 810, // Adjusted to match the 2:3 book cover ratio
          alt: `Image for the story ${story.title}`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${story.title} — Chi Akomas`,
      description: story.excerpt,
      images: [story.image],
    },
  }
}

export default async function StoryPage({
  params,
}: StoryPageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    notFound()
  }

  const paragraphs = story.content
    .trim()
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <main className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      <article className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Link
            href="/#gallery"
            className="inline-flex font-body text-base text-[#A95633] transition-colors hover:text-zinc-950"
          >
            ← Back to gallery
          </Link>

          <header className="mx-auto mt-10 max-w-4xl text-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              {story.readingTime} min read
            </p>

            <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
              {story.title}
            </h1>
          </header>

          {/* Changed aspect ratio to [2/3] for standard book cover size and reduced max-width so it scales properly on screen */}
          <div className="relative mx-auto mt-12 aspect-[2/3] max-w-md overflow-hidden bg-zinc-200 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:max-w-lg lg:max-w-xl">
            <Image
              src={story.image}
              alt={`Image for the story ${story.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 576px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-7 font-body text-xl leading-9 text-zinc-800 sm:text-2xl sm:leading-10">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${story.slug}-${index}`}
                className="indent-8 text-justify hyphens-auto"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="mx-auto mt-20 max-w-4xl border-t border-zinc-300 pt-10 text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              Did you enjoy the Book?
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-8 text-zinc-700">
              This piece is part of the <em>Book</em>, Coming soon.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/book" tone="light">
                Discover Muted Masculity
              </Button>

              <Button href="/#gallery" variant="outline" tone="light">
                Back to Book Gallery
              </Button>
            </div>
          </footer>
        </Container>
      </article>
    </main>
  )
}
