import { Container } from '@/components/layout/Container'
import { stories } from '@/data/stories'
import Image from 'next/image'
import Link from 'next/link'

export function Stories(): React.JSX.Element {
  return (
    <section id="contos" className="scroll-mt-20 bg-white py-24 text-zinc-950">
      <Container>
        <div className="mb-14 flex flex-col items-center text-center">
          <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
            Contos selecionados
          </p>

          <h2 className="font-heading text-5xl leading-none tracking-[0.04em] sm:text-6xl">
            HISTÓRIAS DE CARNE E OSSO
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/contos/${story.slug}`}
              className="group block bg-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
                <Image
                  src={story.image}
                  alt={`Imagem do conto ${story.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-6 py-7">
                <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  Conto
                </p>

                <h3 className="font-heading text-3xl leading-none tracking-[0.04em] text-zinc-950">
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
