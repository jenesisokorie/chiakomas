import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'

export function About(): React.JSX.Element {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-zinc-100 py-32 text-zinc-950"
    >
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[minmax(0,5.6fr)_minmax(0,4.4fr)] lg:gap-16">
          <div className="relative min-h-[440px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:min-h-[640px]">
            <Image
              src="/images/chi-akomas.jpg"
              alt="Chi Akomas — Author, Speaker, and Gospel Recording Artist"
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              About the Author
            </p>

            <h2 className="font-heading text-5xl leading-none tracking-[0.04em] text-zinc-950 sm:text-6xl">
              CHI AKOMAS
            </h2>

            <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
              <p>
                Chi Akomas is an author, speaker, gospel recording artist,
                communication educator, and digital content strategist dedicated
                to empowering people to live with purpose, confidence, and
                authentic leadership.
              </p>

              <p>
                Through her books, music, and public speaking, Chi directly
                addresses vital human and social issues—ranging from effective
                communication and emotional intelligence to relationships and
                men’s mental health. As an author, she is deeply passionate
                about transforming lives by combining research-backed insights
                with real-life, practical application.
              </p>

              <p>
                Whether teaching creators how to build impactful digital
                communities or sharing hope through moving gospel worship, her
                overarching mission is to equip global minds to lead
                courageously, communicate clearly, and maximize their true
                potential.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
