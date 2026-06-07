import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'

export function About(): React.JSX.Element {
  return (
    <section id="sobre" className="bg-zinc-100 py-24 text-zinc-950">
      <Container>
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
            <Image
              src="/images/cabral-correia.jpeg"
              alt="Cabral Correia, autor de Carne e Osso"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale"
            />
          </div>

          <div className="flex flex-col justify-center bg-zinc-100 px-0 py-12 lg:px-20 lg:py-20">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              Sobre o autor
            </p>

            <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-700">
              <p>
                Cabral Correia é escritor brasileiro e autor de{' '}
                <Link
                  href="/livro"
                  className="text-zinc-950 underline decoration-[#A95633] underline-offset-4 transition-colors hover:text-[#A95633]"
                >
                  Carne e Osso
                </Link>
                , seu livro de estreia.
              </p>

              <p>
                Ao longo de 22 anos, reuniu histórias que deram origem à
                coletânea, construída a partir de personagens comuns, conflitos
                humanos e retratos de uma realidade muitas vezes dura e
                contraditória.
              </p>

              <p>
                Seus contos já foram publicados em edições do Prêmio Estadual
                Ideal Clube de Literatura e em revistas literárias.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
