import type { Story } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface StoryCardProps {
  story: Story
}

export function StoryCard({ story }: StoryCardProps): React.JSX.Element {
  return (
    <Link
      href={`/contos/${story.slug}`}
      className="group block bg-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Book Cover Portrait Aspect Ratio */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200">
        <Image
          src={story.image}
          alt={`Cover for ${story.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-6 py-7">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Publication
          </p>
          <span className="font-body text-[10px] font-bold uppercase tracking-wider text-[#A95633]">
            Coming Soon
          </span>
        </div>

        <h3 className="font-heading text-3xl leading-none tracking-[0.04em] text-zinc-950">
          {story.title}
        </h3>
      </div>
    </Link>
  )
}
