import type { MusicTrack } from '@/data/music'
import Image from 'next/image'
import Link from 'next/link'

interface MusicCardProps {
  track: MusicTrack
}

export function MusicCard({ track }: MusicCardProps): React.JSX.Element {
  return (
    <Link
      href={`/music/${track.slug}`}
      className="group block bg-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Album Cover Square Aspect Ratio */}
      <div className="relative aspect-square overflow-hidden bg-zinc-200">
        <Image
          src={track.image}
          alt={`Album art for ${track.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-6 py-7">
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Single • {track.releaseYear}
        </p>

        <h3 className="font-heading text-3xl leading-none tracking-[0.04em] text-zinc-950">
          {track.title}
        </h3>
      </div>
    </Link>
  )
}
