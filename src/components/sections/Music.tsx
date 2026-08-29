import { MusicCard } from '@/components/cards/MusicCard'
import { Container } from '@/components/layout/Container'
import { musicTracks } from '@/data/music'

export function Music(): React.JSX.Element {
  return (
    <section id="music" className="scroll-mt-20 bg-zinc-50 py-32 text-zinc-950">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
            Discography
          </p>

          <h2 className="font-heading text-5xl leading-none tracking-[0.04em] sm:text-6xl">
            MUSIC & RELEASES
          </h2>

          <p className="mt-4 max-w-2xl font-body text-lg leading-7 text-zinc-600">
            Listen to the latest gospel tracks. Select a song to choose your
            preferred streaming platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {musicTracks.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </Container>
    </section>
  )
}
