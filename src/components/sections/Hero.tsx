import { Container } from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const purchaseUrl =
  "https://produto.mercadolivre.com.br/MLB-4687862395-carne-e-osso-cabral-correia-coletnea-de-contos-contemporneos-literatura-brasileira-livro-novo-1a-edico-_JM";

export function Hero(): React.JSX.Element {
  return (
    <section id="inicio" className="min-h-screen bg-white pt-20 text-zinc-950">
      <Container>
        <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[48%_52%]">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/carne-e-osso-cover.jpg"
              alt="Capa do livro Carne e Osso, de Cabral Correia"
              width={459}
              height={616}
              priority
              className="h-auto w-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[340px] lg:w-[390px]"
            />
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-6 font-body text-sm uppercase tracking-[0.35em] text-[#A95633]">
              Realismo urbano
            </p>

            <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
              CARNE E OSSO
            </h1>

            <p className="mt-8 max-w-xl font-body text-xl leading-9 text-zinc-700">
              Desejo, culpa, violência, amor e pequenas transgressões. Cenários
              densos, feitos de encontros, ruídos e gestos que deixam marcas.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/livro"
                className="inline-flex h-12 items-center justify-center border border-zinc-950 bg-zinc-950 px-8 font-body text-base text-white transition-colors hover:border-[#A95633] hover:bg-[#A95633]"
              >
                Saiba mais
              </Link>

              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border border-zinc-950 px-8 font-body text-base text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}