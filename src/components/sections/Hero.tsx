import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const purchaseUrl =
  'https://produto.mercadolivre.com.br/MLB-4687862395-carne-e-osso-cabral-correia-coletnea-de-stories-contemporneos-literatura-brasileira-book-novo-1a-edico-_JM'

export function Hero(): React.JSX.Element {
  return (
    <section id="home" className="bg-zinc-100 pt-20 text-zinc-950">
      <div className="relative">
        <Container>
          <div className="grid grid-cols-1 items-end gap-12 pt-14 pb-10 sm:pt-20 lg:grid-cols-[minmax(0,4.8fr)_minmax(0,5.2fr)] lg:pt-24 lg:pb-14">
            <div className="relative z-10 flex justify-center lg:justify-start lg:-mb-72">
              <Image
                src="/images/muted-masculinity-cover.jpg"
                alt="Capa do book Muted Masculity, de Chi Akomas"
                width={459}
                height={616}
                priority
                className="h-auto w-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[340px] lg:w-[390px]"
              />
            </div>

            <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                Popular Psychology
              </p>

              <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
                MUTED MASCULINITY
              </h1>
            </div>
          </div>
        </Container>

        <div className="bg-zinc-950 text-zinc-100">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4.8fr)_minmax(0,5.2fr)]">
              <div className="hidden lg:block" />

              <div className="flex min-w-0 flex-col items-center pt-10 pb-16 text-center sm:pb-20 lg:items-start lg:pt-14 lg:pb-24 lg:text-left">
                <p className="max-w-xl font-body text-xl leading-9 text-zinc-100 sm:text-xl sm:leading-10">
                  ​“Boys are not born quiet. They enter the world full of
                  expression, experiencing their feelings without shame or
                  conflict. Then, a subtle shift occurs. Through a gradual
                  buildup of societal expectations and quiet corrections, the
                  world reacts to his emotions. He learns his very first lesson:
                  Be a man.”
                </p>

                <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <Button href="/book" tone="dark">
                    Learn more
                  </Button>

                  <Button
                    href={purchaseUrl}
                    external
                    variant="outline"
                    tone="dark"
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
